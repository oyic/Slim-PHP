<?php

namespace Glue\Controllers;

/**
* Base Controller of the Entire App	
*/
class BaseController 
{
    protected $container;
    protected $args;
    protected $current;

    public function __construct($container)
    {
        $this->container = $container;
        $this->args['api_url'] = $this->config->get('api.base_url');
        $this->args['access_token'] = $this->config->get('api.access_token');
        $this->args['site_name'] = $this->config->get('app.name');
        $this->args['current_route'] = $_SERVER['REDIRECT_URL']=='/'?'/':substr($_SERVER['REDIRECT_URL'],1);
 
       
    }

    public function __get($property)
    {
        if ($this->container->{$property}) {
            return $this->container->{$property};
        }
    }
    
}