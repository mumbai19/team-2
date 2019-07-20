<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductCategory;
use App\Cause;

use App\CustomProduct;
use App\Cart;
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
	
	function getProductDetails($id){
		$productDetails=Product::find($id);
		$dataModel=[];
    	if($productDetails){
			$dataModel['data'] = $productDetails;

        	$dataModel['message'] = "Fetch Successful";
        	$dataModel['error'] = false;
        }else{
        	$dataModel['data'] = null;
        	$dataModel['message'] = "Fetch Unsuccessful";
        	$dataModel['error'] = true;
		}
		
		return new GeneralResources($dataModel);
	}

	public function placeCustomOrders(Request $request)
    {
    	$dataModel=[];
        $customize = new CustomProduct();
        $customize->product_id = $request->product_id;
		$customize->customer_id= $request->customer_id;
		$customize->color= $request->color;
		$customize->amount= $request->amount;
        $result=$customize->save();
        if($result){
        	$dataModel['data'] = $result;
        	$dataModel['message'] = "Placing Customized order Successful";
        	$dataModel['error'] = false;
        }else{
        	$dataModel['data'] = 0;
        	$dataModel['message'] = "Placing Customized order Unsuccessful";
        	$dataModel['error'] = true;
		}

        return new GeneralResources($dataModel);
	}
	

	function getUserCart($id){
    	$usercart=Cart::find($id);
    	$dataModel=[];
    	if($usercart){
        	$dataModel['data'] = $usercart;
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
