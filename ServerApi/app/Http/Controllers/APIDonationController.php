<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Donations;
use App\Http\Resources\GeneralResources as GeneralResources;
class APIDonationController extends Controller
{
    public function submit(Request $request){
        $donation = new Donations();
        $donation->customer_id = $request->customer_id;
        $donation->cause_id = $request->cause_id;
        $donation->amount = $request->amount;
        $result=$donation->save();
        if($result){
        	$dataModel['data'] = $result;
        	$dataModel['message'] = "Insert Successful";
        	$dataModel['error'] = false;
        }else{
        	$dataModel['data'] = 0;
        	$dataModel['message'] = "Insert Unsuccessful";
        	$dataModel['error'] = true;
        }
        return new GeneralResources($dataModel);
    }
}
