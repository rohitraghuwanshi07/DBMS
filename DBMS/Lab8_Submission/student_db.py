import psycopg2
from psycopg2 import sql, Error
import sys

class DatabaseManager:
    def __init__(self):
        self.connection = None
        self.cursor = None
    
    def connect(self, host="localhost", port="5432", database="studentdb", 
                user="postgres", password="admin123"):
        """Establish connection to PostgreSQL database"""
        try:
            self.connection = psycopg2.connect(
                host=host,
                port=port,
                database=database,
                user=user,
                password=password
            )
            self.cursor = self.connection.cursor()
            print("✓ Successfully connected to PostgreSQL database")
            return True
        except Error as e:
            print(f"✗ Error connecting to PostgreSQL: {e}")
            return False
    
    def create_table(self, table_name, columns):
        """
        Task 1: Create a table with given name and columns
        columns: list of tuples like [('id', 'SERIAL PRIMARY KEY'), ('name', 'VARCHAR(100)')]
        """
        try:
            # Build column definitions
            column_defs = ", ".join([f"{col[0]} {col[1]}" for col in columns])
            query = f"CREATE TABLE IF NOT EXISTS {table_name} ({column_defs})"
            
            self.cursor.execute(query)
            self.connection.commit()
            print(f"✓ Table '{table_name}' created successfully")
            
            # Confirm creation by querying information_schema
            self.cursor.execute("""
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public' AND table_name = %s
            """, (table_name,))
            
            result = self.cursor.fetchone()
            if result:
                print(f"✓ Confirmed: Table '{result[0]}' exists in database")
            
        except Error as e:
            print(f"✗ Error creating table: {e}")
            self.connection.rollback()
    
    def insert_student(self, name, age, department, email):
        """Task 2: Insert a student record"""
        try:
            query = """
                INSERT INTO students (name, age, department, email) 
                VALUES (%s, %s, %s, %s)
            """
            self.cursor.execute(query, (name, age, department, email))
            self.connection.commit()
            print(f"✓ Student '{name}' inserted successfully")
        except Error as e:
            print(f"✗ Error inserting student: {e}")
            self.connection.rollback()
    
    def update_student_department(self, name, new_department):
        """Task 2: Update student's department by name"""
        try:
            query = "UPDATE students SET department = %s WHERE name = %s"
            self.cursor.execute(query, (new_department, name))
            self.connection.commit()
            
            if self.cursor.rowcount > 0:
                print(f"✓ Updated {self.cursor.rowcount} student(s) to department '{new_department}'")
            else:
                print(f"✗ No student found with name '{name}'")
        except Error as e:
            print(f"✗ Error updating student: {e}")
            self.connection.rollback()
    
    def delete_student(self, student_id):
        """Task 2: Delete student by ID"""
        try:
            query = "DELETE FROM students WHERE id = %s"
            self.cursor.execute(query, (student_id,))
            self.connection.commit()
            
            if self.cursor.rowcount > 0:
                print(f"✓ Deleted student with ID {student_id}")
            else:
                print(f"✗ No student found with ID {student_id}")
        except Error as e:
            print(f"✗ Error deleting student: {e}")
            self.connection.rollback()
    
    def display_all_students(self):
        """Task 3: Retrieve and display all students"""
        try:
            query = "SELECT * FROM students ORDER BY id"
            self.cursor.execute(query)
            records = self.cursor.fetchall()
            
            if records:
                print("\n" + "="*80)
                print(f"{'ID':<5} {'Name':<20} {'Age':<5} {'Department':<20} {'Email':<30}")
                print("="*80)
                for row in records:
                    print(f"{row[0]:<5} {row[1]:<20} {row[2]:<5} {row[3]:<20} {row[4]:<30}")
                print("="*80)
                print(f"Total students: {len(records)}\n")
            else:
                print("No students found in database")
        except Error as e:
            print(f"✗ Error retrieving students: {e}")
    
    def display_students_by_department(self, department):
        """Task 3: Display students from specific department"""
        try:
            query = "SELECT * FROM students WHERE department = %s ORDER BY id"
            self.cursor.execute(query, (department,))
            records = self.cursor.fetchall()
            
            if records:
                print(f"\nStudents in {department} department:")
                print("="*80)
                print(f"{'ID':<5} {'Name':<20} {'Age':<5} {'Department':<20} {'Email':<30}")
                print("="*80)
                for row in records:
                    print(f"{row[0]:<5} {row[1]:<20} {row[2]:<5} {row[3]:<20} {row[4]:<30}")
                print("="*80)
                print(f"Total students: {len(records)}\n")
            else:
                print(f"No students found in {department} department")
        except Error as e:
            print(f"✗ Error retrieving students: {e}")
    
    def display_average_age_by_department(self):
        """Task 3: Display average age of students in each department"""
        try:
            query = """
                SELECT department, AVG(age) as avg_age, COUNT(*) as student_count
                FROM students 
                GROUP BY department
                ORDER BY department
            """
            self.cursor.execute(query)
            records = self.cursor.fetchall()
            
            if records:
                print("\nAverage Age by Department:")
                print("="*60)
                print(f"{'Department':<20} {'Avg Age':<15} {'Student Count':<15}")
                print("="*60)
                for row in records:
                    print(f"{row[0]:<20} {row[1]:<15.2f} {row[2]:<15}")
                print("="*60 + "\n")
            else:
                print("No data available")
        except Error as e:
            print(f"✗ Error calculating average age: {e}")
    
    def display_students_by_name_pattern(self, letter):
        """Task 3: Find students whose names start with given letter"""
        try:
            pattern = f"{letter}%"
            query = "SELECT * FROM students WHERE name ILIKE %s ORDER BY name"
            self.cursor.execute(query, (pattern,))
            records = self.cursor.fetchall()
            
            if records:
                print(f"\nStudents whose names start with '{letter}':")
                print("="*80)
                print(f"{'ID':<5} {'Name':<20} {'Age':<5} {'Department':<20} {'Email':<30}")
                print("="*80)
                for row in records:
                    print(f"{row[0]:<5} {row[1]:<20} {row[2]:<5} {row[3]:<20} {row[4]:<30}")
                print("="*80)
                print(f"Total students: {len(records)}\n")
            else:
                print(f"No students found whose names start with '{letter}'")
        except Error as e:
            print(f"✗ Error searching students: {e}")
    
    def close(self):
        """Task 5: Close database connections gracefully"""
        if self.cursor:
            self.cursor.close()
        if self.connection:
            self.connection.close()
            print("✓ Database connection closed")


def display_menu():
    """Task 4: Display text-based menu"""
    print("\n" + "="*50)
    print("     STUDENT DATABASE MANAGEMENT SYSTEM")
    print("="*50)
    print("1. Create Table")
    print("2. Insert Student")
    print("3. Update Student Department")
    print("4. Delete Student")
    print("5. Query Data")
    print("6. Exit")
    print("="*50)


def query_submenu(db):
    """Submenu for query operations"""
    while True:
        print("\n" + "-"*50)
        print("QUERY OPERATIONS")
        print("-"*50)
        print("1. Display All Students")
        print("2. Display Students by Department")
        print("3. Display Average Age by Department")
        print("4. Search Students by Name Pattern")
        print("5. Back to Main Menu")
        print("-"*50)
        
        try:
            choice = input("Enter your choice: ").strip()
            
            if choice == '1':
                db.display_all_students()
            elif choice == '2':
                dept = input("Enter department name: ").strip()
                db.display_students_by_department(dept)
            elif choice == '3':
                db.display_average_age_by_department()
            elif choice == '4':
                letter = input("Enter starting letter: ").strip()
                if letter:
                    db.display_students_by_name_pattern(letter[0])
                else:
                    print("Please enter a valid letter")
            elif choice == '5':
                break
            else:
                print("Invalid choice. Please try again.")
        except Exception as e:
            print(f"Error: {e}")


def main():
    db = DatabaseManager()
    
    # Connect to database
    if not db.connect():
        print("Failed to connect to database. Exiting...")
        return
    
    try:
        while True:
            display_menu()
            choice = input("Enter your choice: ").strip()
            
            if choice == '1':
                # Create Table
                table_name = input("Enter table name (default: students): ").strip() or "students"
                
                # Default columns for students table
                columns = [
                    ('id', 'SERIAL PRIMARY KEY'),
                    ('name', 'VARCHAR(100) NOT NULL'),
                    ('age', 'INTEGER'),
                    ('department', 'VARCHAR(50)'),
                    ('email', 'VARCHAR(100)')
                ]
                
                print(f"\nCreating table with columns: {', '.join([c[0] for c in columns])}")
                db.create_table(table_name, columns)
            
            elif choice == '2':
                # Insert Student
                print("\nEnter student details:")
                name = input("Name: ").strip()
                try:
                    age = int(input("Age: ").strip())
                except ValueError:
                    print("Invalid age. Please enter a number.")
                    continue
                
                department = input("Department: ").strip()
                email = input("Email: ").strip()
                
                db.insert_student(name, age, department, email)
            
            elif choice == '3':
                # Update Student Department
                name = input("Enter student name to update: ").strip()
                new_dept = input("Enter new department: ").strip()
                db.update_student_department(name, new_dept)
            
            elif choice == '4':
                # Delete Student
                try:
                    student_id = int(input("Enter student ID to delete: ").strip())
                    db.delete_student(student_id)
                except ValueError:
                    print("Invalid ID. Please enter a number.")
            
            elif choice == '5':
                # Query Data
                query_submenu(db)
            
            elif choice == '6':
                # Exit
                print("\nThank you for using the Student Database Management System!")
                break
            
            else:
                print("Invalid choice. Please select a valid option.")
    
    except KeyboardInterrupt:
        print("\n\nProgram interrupted by user.")
    except Exception as e:
        print(f"Unexpected error: {e}")
    finally:
        # Task 5: Cleanup
        db.close()
        print("Goodbye!")


if __name__ == "__main__":
    main()
