<?php

session_start();

require __DIR__ . '/../vendor/autoload.php';

$app = new \Slim\App();

$container = $app->getContainer();

$container['view'] = function($container){
	$view = new \Slim\Views\Twig(__DIR__ . '/../resources/views/',[
			'cache'=>false,
			]);
	$view->addExtension(new \Slim\Views\TwigExtension(
			$container->router,
			$container->request->getUri()
	));
	$view->addExtension(new \nochso\HtmlCompressTwig\Extension());
	return $view;
};

$container['config'] = function($c){
	return new Noodlehaus\Config([
		"../config/app.php"
	]);
};
$container['notFoundHandler'] = function($c){
	return function($request,$response) use($c){
		$c->view->render($response,'errors/404.twig');
			return $response->withStatus(404);
	};
};
$container['DashboardController'] = function($c){
		return new \Glue\Controllers\DashboardController($c);
};
$container['AuthController'] = function($c){
		return new \Glue\Controllers\Auth\AuthController($c);
};

require __DIR__ . '/../app/routes.php';