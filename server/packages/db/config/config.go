package db

import (
	"database/sql"
	"log"

	_ "github.com/go-sql-driver/mysql"
)


func ConnectToDB() (db *sql.DB)  {
	log.Println("Connecting to MySQL DB...")
	
	connstr := "root:80aLOv9gIY0UIZrVXM3d@tcp(containers-us-west-155.railway.app:5443)/railway"
	db, err := sql.Open("mysql", connstr)

    if err != nil {
        log.Fatalf("failed to connect: %v", err)
    }

    if err := db.Ping(); err != nil {
		log.Fatalf("Failed to ping: %v", err)
    }

    log.Println("Successfully connected")

	return db
}