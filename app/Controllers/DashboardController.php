<?php

namespace Glue\Controllers;

class DashboardController extends BaseController
{	
	/**
	 * [Overview Route Controller]
	 */
	public function overview($request,$response,$args)
	{

		$this->args['page_title'] = 'Overview';
		return $this->view->render($response,'pages/dashboard.twig',$this->args);
	}
	public function engagement($request,$response,$args){
		$this->args['page_title'] = 'Engagement';
		
		return $this->view->render($response,'pages/engagement.twig',$this->args);
	}
	public function plays($request,$response,$args){
			$this->args['page_title'] = 'Plays';
		return 'Plays Twig File';
	}
	public function views($request,$response,$args){
			$this->args['page_title'] = 'Views';
		return 'views Twig File';
	}
	public function site($request,$response,$args){
			$this->args['page_title'] = 'Site';
		return 'site Twig File';
	}
	public function system($request,$response,$args){
			$this->args['page_title'] = 'System';
		return 'system Twig File';
	}
	public function report($request,$response,$args){
			$this->args['page_title'] = 'Reports';
		return 'report Twig File';
	}
}