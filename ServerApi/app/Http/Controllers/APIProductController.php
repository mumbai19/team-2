<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductCategory;
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
}
