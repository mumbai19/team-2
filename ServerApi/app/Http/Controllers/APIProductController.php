<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use App\ProductCategory;
use App\Cause;

use App\CustomProduct;
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
<<<<<<< HEAD
	function getcause(){
    	$cause=Cause::all();
    	// print_r($category);
    	// exit;
    	$dataModel=[];
    	if($cause){
        	$dataModel['data'] = $cause;
=======
	
	function getProductDetails($id){
		$productDetails=Product::find($id);
		$dataModel=[];
    	if($productDetails){
        	$dataModel['data'] = $productDetails;
>>>>>>> be0f46fc21dfe2ae819d26e0284bd75f9dc2b3ca
        	$dataModel['message'] = "Fetch Successful";
        	$dataModel['error'] = false;
        }else{
        	$dataModel['data'] = null;
        	$dataModel['message'] = "Fetch Unsuccessful";
        	$dataModel['error'] = true;
        }
<<<<<<< HEAD
=======
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
>>>>>>> be0f46fc21dfe2ae819d26e0284bd75f9dc2b3ca
        return new GeneralResources($dataModel);
    }
}
