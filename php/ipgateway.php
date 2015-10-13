<?php

class IpGateway {

        private $apiEndPoint = "http://54.65.15.169/apitest/";

        public function run($url){
                return  $this->apiAccess($url);
        }


        private function apiAccess($reqUrl){
                $data = array(
                        'reqUrl' => $reqUrl ,
                );
                $options = array('http' => array(
                        'method' => 'POST',
                        'content' => http_build_query($data),
                ));

                return  @file_get_contents($this->apiEndPoint, false, stream_context_create($options));
        }
}


$url = "http://search.yahoo.co.jp/search;_ylt=A2RA2DjHYApWCnAAWsaj_Op7?p=mfro&search.x=1&fr=top_ga1_sa&tid=top_ga1_sa&ei=UTF" ;

$IpGateway      = new IpGateway();
echo $IpGateway->run($url);

?>
