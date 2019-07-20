<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductCategory;
use App\Cause;
use App\Http\Resources\GeneralResources as GeneralResources;
class APIProductController extends Controller
{
    function getcategory(){
    	$category=ProductCategory::with('products')->get();
    	// print_r($category);
    	// exit;
    	$dataModel=[];
    	if($category){
        	$dataModel['data'] = $category;
        	$dataModel['message'] = "Fetch Successful";
        	$dataModel['error'] = false;
        }else{
        	$dataModel['data'] = null;
        	$dataModel['message'] = "Fetch Unsuccessful";
        	$dataModel['error'] = true;
        }
        return new GeneralResources($dataModel);
	}

	
	function getproduct(){
		$product=Product::all();
		$dataModel=[];
    	if($product){
        	$dataModel['data'] = $product;
        	$dataModel['message'] = "Fetch Successful";
        	$dataModel['error'] = false;
        }else{
        	$dataModel['data'] = null;
        	$dataModel['message'] = "Fetch Unsuccessful";
        	$dataModel['error'] = true;
        }
		return new GeneralResources($dataModel);
	}

	function gettrends(){
    	$product=Product::take(5)->get();

    	// print_r($category);
    	// exit;
    	$dataModel=[];
    	if($product){
        	$dataModel['data'] = $product;
        	$dataModel['message'] = "Fetch Successful";
        	$dataModel['error'] = false;
        }else{
        	$dataModel['data'] = null;
        	$dataModel['message'] = "Fetch Unsuccessful";
        	$dataModel['error'] = true;
        }
        return new GeneralResources($dataModel);
	}
	function getcause(){
    	$cause=Cause::all();
    	// print_r($category);
    	// exit;
    	$dataModel=[];
    	if($cause){
        	$dataModel['data'] = $cause;
        	$dataModel['message'] = "Fetch Successful";
        	$dataModel['error'] = false;
        }else{
        	$dataModel['data'] = null;
        	$dataModel['message'] = "Fetch Unsuccessful";
        	$dataModel['error'] = true;
        }
        return new GeneralResources($dataModel);
    }
}
