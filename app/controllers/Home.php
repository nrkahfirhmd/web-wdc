<?php

class Home extends Controller{
    public function index() {
        $data = [
            'title' => 'Home Page',
            'data' => $this->model('Sample_model')->getData()
        ];
        $this->view('templates/header', $data);
        $this->view('home/index', $data);
        $this->view('templates/footer', $data);
    }
}