<?php

class Sample_model {
    private $dbhandler;
    private $statement;

    public function __construct() {
        $dsname = 'mysql:host=HOSTNAME;dbname=DATABASE_NAME';

        try {
            $this->dbhandler = new PDO($dsname, 'USERNAME', 'PASSWORD');
        } catch(PDOException $e) {
            die($e->getMessage());
        }
    }

    public function getData() {
        $this->statement = $this->dbhandler->prepare('SQL_COMMAND');
        $this->statement->execute();
        return $this->statement->fetchAll(PDO::FETCH_ASSOC);
    }
}