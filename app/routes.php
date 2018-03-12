<?php

// $app->get('/', function($request,$response){
// 	return $this->view->render($response,'home.twig');
// });





$app->get('/auth/signin','AuthController:getSignIn')->setName('auth.signin');
$app->post('/auth/signin','AuthController:postSignIn');

$app->get('/auth/forgot','AuthController:getForgotPassword')->setName('auth.forgot');
$app->post('/auth/forgot','AuthController:postForgotPassword');

// Guard Middleware
$app->get('/auth/singout','AuthController:getSignOut')->setName('auth.signout');

$app->get('/','DashboardController:overview')->setName('dash.home');
$app->get('/engagement','DashboardController:engagement')->setName('dash.engagement');
$app->get('/plays','DashboardController:plays')->setName('dash.plays');
$app->get('/views','DashboardController:views')->setName('dash.views');
$app->get('/site','DashboardController:site')->setName('dash.site');
$app->get('/system','DashboardController:system')->setName('dash.system');
$app->get('/report','DashboardController:report')->setName('dash.report');





