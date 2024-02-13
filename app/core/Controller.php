<?php

class Controller {
    public function view($view, $data = []) {
        if ( isset($data)) {
            extract($data);
        }
        require_once '../app/views/' . $view . '.php'; 
    }

    public function model($model) {
        require_once '../app/models/' . $model . '.php';
        return new $model;
    }
}