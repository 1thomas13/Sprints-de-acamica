CREATE TABLE Bandasmusicales (id INT AUTO_INCREMENT PRIMARY KEY,
            nombre VARCHAR(100),
            integrantes INT(5),
            fecha_inicio DATE, 
            fecha_separacion DATE,
            pais VARCHAR(100));

CREATE TABLE Canciones (id INT AUTO_INCREMENT,
            nombre VARCHAR(100),
            duracion INT(100),
            album INT(100),
            banda INT(100),
            fecha_publicacion DATE,
            PRIMARY KEY (id));

CREATE TABLE Albumes (id INT AUTO_INCREMENT,
            nombre VARCHAR(100),
            banda INT(100),
            fecha_publicacion DATE,
            PRIMARY KEY (id));

INSERT INTO bandasmusicales (nombre,integrantes,fecha_inicio,pais) VALUES ("FKJ",1,"2005/12/12","Francia");
INSERT INTO albumes (nombre,banda,fecha_publicacion) VALUES ("Just Piano",1,"2020/06/3")
INSERT INTO canciones (nombre,duracion,album,banda,fecha_publicacion) VALUES ("Tadow",180,1,1,"2019/12/12");
INSERT INTO canciones (nombre,duracion,album,banda,fecha_publicacion) VALUES ("Cashew",280,1,1,"2020/12/12");

INSERT INTO bandasmusicales (nombre,integrantes,fecha_inicio,pais) VALUES ("Radiohead",6,"1991/12/12","Inglaterra");
INSERT INTO albumes (nombre,banda,fecha_publicacion) VALUES ("Creep",2,"1999/06/3");
INSERT INTO canciones (nombre,duracion,album,banda,fecha_publicacion) VALUES ("Creep",220,2,2,"1999/06/3");
INSERT INTO canciones (nombre,duracion,album,banda,fecha_publicacion) VALUES ("Paranoid android",240,2,2,"1994/01/12");


SELECT * FROM bandasmusicales;
SELECT pais FROM bandasmusicales WHERE pais = "argentina";
SELECT * FROM bandasmusicales WHERE integrantes = 1;
SELECT * FROM canciones WHERE year(fecha_publicacion) > 2015;
SELECT * FROM canciones WHERE duracion > 180;
SELECT * FROM albumes;