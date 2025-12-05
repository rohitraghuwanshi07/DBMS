# Student Database Management System
A Python-based database management system for managing student records using PostgreSQL.

# Prerequisites
- Python 3.7 or higher
- Docker installed and running
- PostgreSQL Docker container set up

# Setup Instructions
# 1. Docker PostgreSQL Setup
```bash
# Pull PostgreSQL image
docker pull postgres

# Run PostgreSQL container
docker run --name pg_lab -e POSTGRES_PASSWORD=admin123 -p 5432:5432 -d postgres

# Access PostgreSQL shell
docker exec -it pg_lab psql -U postgres

# Create the database (inside psql)
CREATE DATABASE studentdb;

# Exit psql
\q
# 2. Python Environment Setup
bash
# Create a virtual environment (optional but recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Linux/Mac:
source venv/bin/activate

# Install required packages
pip install -r requirements.txt
## Running the Program
bash
python student_db_manager.py
# Features
The program provides the following functionality:
# 1. Create Table
- Creates a students table with the following columns:
  - id (Primary Key, Auto-increment)
  - name (VARCHAR)
  - age (INTEGER)
  - department (VARCHAR)
  - email (VARCHAR)
- Confirms table creation by querying information_schema

# 2. Insert Student
- Prompts for student details (name, age, department, email)
- Inserts the data into the students table
- Handles input validation

# 3. Update Student Department
- Updates a student's department based on their name
- Provides feedback on success or if student not found

# 4. Delete Student
- Deletes a student record by ID
- Confirms deletion or notifies if student doesn't exist

# 5. Query Data
Submenu with multiple query options:
- **Display All Students**: Shows all records in the database
- **Display Students by Department**: Filters students by department
- **Display Average Age by Department**: Shows average age using GROUP BY
- **Search Students by Name Pattern**: Finds students whose names start with a given letter

# 6. Exit
- Gracefully closes database connections
- Ensures proper cleanup

# Database Configuration

Default connection parameters:
- **Host**: localhost
- **Port**: 5432
- **Database**: studentdb
- **User**: postgres
- **Password**: admin123

To modify these, edit the `connect()` method parameters in the `DatabaseManager` class.

## Error Handling

The program includes comprehensive error handling for:
- Database connection failures
- Invalid user input
- SQL execution errors
- Keyboard interrupts

# Example Usage
1. First, select option 1 to create the table
2. Select option 2 to insert multiple students
3. Use option 5 to query and view your data
4. Try option 3 to update a student's department
5. Use option 4 to delete a student by ID
6. Select option 6 to exit gracefully

# Troubleshooting
# Connection Issues
- Ensure Docker container is running: `docker ps`
- Verify database exists: `docker exec -it pg_lab psql -U postgres -c "\l"`
- Check if port 5432 is available

# Module Import Errors
- Ensure psycopg2-binary is installed: `pip install psycopg2-binary`
- Activate your virtual environment if using one

# Permission Errors
- Make sure PostgreSQL container has proper permissions
- Verify the password matches (default: admin123)

# Lab Tasks Completed
 Task 1: Table Creation (DDL) with information_schema confirmation
 Task 2: Data Insertion and Manipulation (DML)
 Task 3: Query Operations (SELECT, GROUP BY, Pattern Matching)
 Task 4: User Interaction and Menu Design
 Task 5: Program Termination and Cleanup

# Notes
- The program uses parameterized queries to prevent SQL injection
- All database operations include proper error handling and rollback mechanisms
- The connection is automatically closed when the program exits
- Table creation uses `IF NOT EXISTS` to avoid errors on repeated runs
