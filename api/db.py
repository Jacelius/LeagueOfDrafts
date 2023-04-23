import psycopg2
import dotenv
import os

def connect_to_db():
    dotenv.load_dotenv()
    db_host = os.getenv("db_host")
    db_user = os.getenv("db_user")
    db_pass = os.getenv("db_pass")
    db_name = os.getenv("db_name")
    db_port = os.getenv("db_port")

    conn_string = "host={0} user={1} password={2} dbname={3} port={4}".format(db_host, db_user, db_pass, db_name, db_port)
    conn = psycopg2.connect(conn_string) 
    print("Connection established")
    cursor = conn.cursor()