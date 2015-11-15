Problem: Could not grant all privileges on root
SELECT host,user,password,Grant_priv,Super_priv FROM mysql.user;

UPDATE mysql.user SET Grant_priv='Y', Super_priv='Y' WHERE User='root';
FLUSH PRIVILEGES;
GRANT ALL ON *.* TO 'root'@'localhost';