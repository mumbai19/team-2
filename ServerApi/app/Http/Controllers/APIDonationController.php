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
        $payment = PaytmWallet::with('receive');
        $payment->prepare([
        //   'order' => $order->id,
        //   'user' => $user->id,
        //   'mobile_number' => $user->phonenumber,
        //   'email' => $user->email,
        //   'amount' => $order->amount,
        //   'callback_url' => 'http://example.com/payment/status'
          'order' => $result,
          'user' => $donation->customer_id,
          'mobile_number' => 9323048363,
          'email' => 'jhaujala3@Gmail.com',
          'amount' => $donation->amount,
          'callback_url' => 'http://localhost/api/payment/status'
        ]);
        return $payment->receive();
        
    }
}
