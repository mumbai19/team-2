<?php

namespace App\Http\Controllers;
use PaytmWallet;
use Illuminate\Http\Request;

class PaymentController extends Controller
{
    public function order()
    {
        $payment = PaytmWallet::with('receive');
        $payment->prepare([
        //   'order' => $order->id,
        //   'user' => $user->id,
        //   'mobile_number' => $user->phonenumber,
        //   'email' => $user->email,
        //   'amount' => $order->amount,
        //   'callback_url' => 'http://example.com/payment/status'
          'order' => 1,
          'user' => 1,
          'mobile_number' => 9323048363,
          'email' => 'jhaujala3@Gmail.com',
          'amount' => 1000,
          'callback_url' => 'http://localhost/api/payment/status'
        ]);
        return $payment->receive();
    }

    /**
     * Obtain the payment information.
     *
     * @return Object
     */
    public function paymentCallback()
    {
        $transaction = PaytmWallet::with('receive');
        
        $response = $transaction->response(); // To get raw response as array
        //Check out response parameters sent by paytm here -> http://paywithpaytm.com/developer/paytm_api_doc?target=interpreting-response-sent-by-paytm
        
        if($transaction->isSuccessful()){
          //Transaction Successful
          // if($result){
            $dataModel['data'] = $result;
            $dataModel['message'] = "Insert Successful";
            $dataModel['error'] = false;
          // }else{
            
          // }
            return new GeneralResources($dataModel);
        }else if($transaction->isFailed()){
            $dataModel['data'] = 0;
            $dataModel['message'] = "Insert Unsuccessful";
            $dataModel['error'] = true;
            return new GeneralResources($dataModel);
        }else if($transaction->isOpen()){
          //Transaction Open/Processing
        }
        $transaction->getResponseMessage(); //Get Response Message If Available
        //get important parameters via public methods
        $transaction->getOrderId(); // Get order id
        $transaction->getTransactionId(); // Get transaction id
    }  
}
