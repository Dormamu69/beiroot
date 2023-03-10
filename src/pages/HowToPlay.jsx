import React from "react";
import Nav from "../common/NavBar";
// import  page from "../graph.html";
const HowToPlay = () => {
  return (
    <div className="content">
      <Nav home={true} />
      <h1>How To Play</h1>
      <p>The object of the game is to guess the root word from the ciphertext in the shortest possible number of moves. You can recover the root word by manipulating each letter of the word. Here are the rules for manipulating the characters:</p>
      <div className="box">
        <div className="content">
          <div className="box">
            <h1>Rules </h1>
            <table>
              <thead>
                <tr>
                  <th>Rule</th>
                  <th>Explanation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rotate 90 degrees Clockwise</td>
                  <td>
                    You can rotate a letter 90 degrees clockwise to create some
                    other letter. for example if you rotate the letter 'ፀ' 90
                    degrees clockwise you get a new letter 'ወ'.
                  </td>
                </tr>
                <tr>
                  <td>Rotate 180 degrees Clockwise</td>
                  <td>
                    {" "}
                    You can also rotate a letter 180 degrees clockwise to create
                    diffrent letter. for example if you rotate the letter 'ሀ'
                    180 degrees clockwise you get a new letter 'በ'.
                  </td>
                </tr>
                <tr>
                  <td>Rotate 270 degrees Clockwise</td>
                  <td>
                    And Finally you can rotate a letter 270 degrees clockwise to
                    create diffrent letter. for example if you rotate the letter
                    'ሁ' 270 degrees clockwise you get a new letter 'ብ'.
                  </td>
                </tr>
                <tr>
                  <td>Flip Horizontaly</td>
                  <td>
                    You can flip a letter horizontally to make it a different
                    character. for Example if you Flip the letter 'ሻ'
                    horizontally you'll get the letter 'ሾ'.{" "}
                  </td>
                </tr>
                <tr>
                  <td>Flip Vertically</td>
                  <td>
                    You can also flip a letter vertically to make it a different
                    character. for Example if you Flip the letter 'ቄ' vertically
                    you'll get the letter 'ቆ'.
                  </td>
                </tr>
                <tr>
                  <td>Same Sound</td>
                  <td>
                    {" "}
                    If the sound is the same, you can also swap the letters. For
                    example, you can replace the character "አ" with the
                    character "ዐ". Remember that words that sound the same can
                    have different meanings. for Example the word "አብይ" and
                    'ዐብይ' have completly diffrent meanings.
                  </td>
                </tr>
                <tr>
                  <td>Manipulating Edges</td>
                  <td>
                    {" "}
                    And last but not least there is Manipulating edges. you can
                    add or remove one straight line from the letter to change it
                    into something diffrent. for example if you add a straight
                    line on top of the letter 'በ' you can get the letter 'ሸ'.
                    Another example is removing a line form the letter "ተ" you
                    can get the letter "ፐ".
                  </td>
                </tr>
              </tbody>
            </table>
            <p>
              checkout the graph below to see how the letters are connected to
              each other. and Have fun playing!
            </p>
          </div>
        </div>
      </div>
      <div className="box">
        <iframe
          width="1024"
          height="1024"
          srcDoc={`<head>
        <meta charset="utf-8">
        
            <script src="lib/bindings/utils.js"></script>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/vis-network/9.1.2/dist/dist/vis-network.min.css" integrity="sha512-WgxfT5LWjfszlPHXRmBWHkV2eceiWTOBvrKCNbdgDYTHrT2AeLCGbF4sZlZw3UMN3WtL0tGUoIAKsu8mllg/XA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/vis-network/9.1.2/dist/vis-network.min.js" integrity="sha512-LnvoEWDFrqGHlHmDD2101OrLcbsfkrzoSpvtSQtxK3RMnRV0eOkhhBN2dXHKRrUU8p2DGRTk35n4O8nWSVe1mQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
            
        
<center>
<h1></h1>
</center>

<!-- <link rel="stylesheet" href="../node_modules/vis/dist/vis.min.css" type="text/css" />
<script type="text/javascript" src="../node_modules/vis/dist/vis.js"> </script>-->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf"
          crossorigin="anonymous"
        ></script>


        <center>
          <h1></h1>
        </center>
        <style type="text/css">

             #mynetwork {
                 width: 100%;
                 height: 800px;
                 background-color: #222222;
                 border: 1px solid lightgray;
                 position: relative;
                 float: left;
             }

             
             #loadingBar {
                 position:absolute;
                 top:0px;
                 left:0px;
                 width: 100%;
                 height: 800px;
                 background-color:rgba(200,200,200,0.8);
                 -webkit-transition: all 0.5s ease;
                 -moz-transition: all 0.5s ease;
                 -ms-transition: all 0.5s ease;
                 -o-transition: all 0.5s ease;
                 transition: all 0.5s ease;
                 opacity:1;
             }

             #bar {
                 position:absolute;
                 top:0px;
                 left:0px;
                 width:20px;
                 height:20px;
                 margin:auto auto auto auto;
                 border-radius:11px;
                 border:2px solid rgba(30,30,30,0.05);
                 background: rgb(0, 173, 246); /* Old browsers */
                 box-shadow: 2px 0px 4px rgba(0,0,0,0.4);
             }

             #border {
                 position:absolute;
                 top:10px;
                 left:10px;
                 width:500px;
                 height:23px;
                 margin:auto auto auto auto;
                 box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
                 border-radius:10px;
             }

             #text {
                 position:absolute;
                 top:8px;
                 left:530px;
                 width:30px;
                 height:50px;
                 margin:auto auto auto auto;
                 font-size:22px;
                 color: #000000;
             }

             div.outerBorder {
                 position:relative;
                 top:400px;
                 width:600px;
                 height:44px;
                 margin:auto auto auto auto;
                 border:8px solid rgba(0,0,0,0.1);
                 background: rgb(252,252,252); /* Old browsers */
                 background: -moz-linear-gradient(top,  rgba(252,252,252,1) 0%, rgba(237,237,237,1) 100%); /* FF3.6+ */
                 background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(252,252,252,1)), color-stop(100%,rgba(237,237,237,1))); /* Chrome,Safari4+ */
                 background: -webkit-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(237,237,237,1) 100%); /* Chrome10+,Safari5.1+ */
                 background: -o-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(237,237,237,1) 100%); /* Opera 11.10+ */
                 background: -ms-linear-gradient(top,  rgba(252,252,252,1) 0%,rgba(237,237,237,1) 100%); /* IE10+ */
                 background: linear-gradient(to bottom,  rgba(252,252,252,1) 0%,rgba(237,237,237,1) 100%); /* W3C */
                 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fcfcfc', endColorstr='#ededed',GradientType=0 ); /* IE6-9 */
                 border-radius:72px;
                 box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
             }
             

             

             
        </style>
    </head>


    <body>
        <div class="card" style="width: 100%">
            
            
            <div id="mynetwork" class="card-body"></div>
        </div>

        
            <div id="loadingBar">
              <div class="outerBorder">
                <div id="text">0%</div>
                <div id="border">
                  <div id="bar"></div>
                </div>
              </div>
            </div>
        
        

        <script type="text/javascript">

              // initialize global variables.
              var edges;
              var nodes;
              var allNodes;
              var allEdges;
              var nodeColors;
              var originalNodes;
              var network;
              var container;
              var options, data;
              var filter = {
                  item : '',
                  property : '',
                  value : []
              };

              

              

              // This method is responsible for drawing the graph, returns the drawn network
              function drawGraph() {
                  var container = document.getElementById('mynetwork');

                  

                  // parsing and collecting nodes and edges from the python
                  nodes = new vis.DataSet([{"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1200", "label": "\u1200", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1201", "label": "\u1201", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1202", "label": "\u1202", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1203", "label": "\u1203", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1204", "label": "\u1204", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1205", "label": "\u1205", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1206", "label": "\u1206", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1208", "label": "\u1208", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1209", "label": "\u1209", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u120a", "label": "\u120a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u120b", "label": "\u120b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u120c", "label": "\u120c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u120d", "label": "\u120d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u120e", "label": "\u120e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u120f", "label": "\u120f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1210", "label": "\u1210", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1211", "label": "\u1211", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1212", "label": "\u1212", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1213", "label": "\u1213", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1214", "label": "\u1214", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1215", "label": "\u1215", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1216", "label": "\u1216", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1217", "label": "\u1217", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1218", "label": "\u1218", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1219", "label": "\u1219", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u121a", "label": "\u121a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u121b", "label": "\u121b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u121c", "label": "\u121c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u121d", "label": "\u121d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u121e", "label": "\u121e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u121f", "label": "\u121f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1220", "label": "\u1220", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1221", "label": "\u1221", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1222", "label": "\u1222", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1223", "label": "\u1223", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1224", "label": "\u1224", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1225", "label": "\u1225", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1226", "label": "\u1226", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1227", "label": "\u1227", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1228", "label": "\u1228", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1229", "label": "\u1229", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u122a", "label": "\u122a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u122b", "label": "\u122b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u122c", "label": "\u122c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u122d", "label": "\u122d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u122e", "label": "\u122e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u122f", "label": "\u122f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1230", "label": "\u1230", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1231", "label": "\u1231", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1232", "label": "\u1232", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1233", "label": "\u1233", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1234", "label": "\u1234", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1235", "label": "\u1235", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1236", "label": "\u1236", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1237", "label": "\u1237", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1238", "label": "\u1238", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1239", "label": "\u1239", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u123a", "label": "\u123a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u123b", "label": "\u123b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u123c", "label": "\u123c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u123d", "label": "\u123d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u123e", "label": "\u123e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u123f", "label": "\u123f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1240", "label": "\u1240", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1241", "label": "\u1241", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1242", "label": "\u1242", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1243", "label": "\u1243", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1244", "label": "\u1244", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1245", "label": "\u1245", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1246", "label": "\u1246", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u124b", "label": "\u124b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1260", "label": "\u1260", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1261", "label": "\u1261", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1262", "label": "\u1262", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1263", "label": "\u1263", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1264", "label": "\u1264", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1265", "label": "\u1265", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1266", "label": "\u1266", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1267", "label": "\u1267", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1268", "label": "\u1268", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1269", "label": "\u1269", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u126a", "label": "\u126a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u126b", "label": "\u126b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u126c", "label": "\u126c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u126d", "label": "\u126d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u126e", "label": "\u126e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u126f", "label": "\u126f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1270", "label": "\u1270", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1271", "label": "\u1271", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1272", "label": "\u1272", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1273", "label": "\u1273", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1274", "label": "\u1274", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1275", "label": "\u1275", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1276", "label": "\u1276", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1277", "label": "\u1277", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1278", "label": "\u1278", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1279", "label": "\u1279", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u127a", "label": "\u127a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u127b", "label": "\u127b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u127c", "label": "\u127c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u127d", "label": "\u127d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u127e", "label": "\u127e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u127f", "label": "\u127f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1280", "label": "\u1280", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1281", "label": "\u1281", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1282", "label": "\u1282", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1283", "label": "\u1283", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1284", "label": "\u1284", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1285", "label": "\u1285", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1286", "label": "\u1286", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u128b", "label": "\u128b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1290", "label": "\u1290", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1291", "label": "\u1291", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1292", "label": "\u1292", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1293", "label": "\u1293", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1294", "label": "\u1294", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1295", "label": "\u1295", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1296", "label": "\u1296", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1297", "label": "\u1297", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1298", "label": "\u1298", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1299", "label": "\u1299", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u129a", "label": "\u129a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u129b", "label": "\u129b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u129c", "label": "\u129c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u129d", "label": "\u129d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u129e", "label": "\u129e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u129f", "label": "\u129f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a0", "label": "\u12a0", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a1", "label": "\u12a1", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a2", "label": "\u12a2", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a3", "label": "\u12a3", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a4", "label": "\u12a4", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a5", "label": "\u12a5", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a6", "label": "\u12a6", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a8", "label": "\u12a8", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12a9", "label": "\u12a9", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12aa", "label": "\u12aa", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ab", "label": "\u12ab", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ac", "label": "\u12ac", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ad", "label": "\u12ad", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ae", "label": "\u12ae", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12b3", "label": "\u12b3", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12b8", "label": "\u12b8", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12b9", "label": "\u12b9", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ba", "label": "\u12ba", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12bb", "label": "\u12bb", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12bc", "label": "\u12bc", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12bd", "label": "\u12bd", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12be", "label": "\u12be", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12c3", "label": "\u12c3", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12c8", "label": "\u12c8", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12c9", "label": "\u12c9", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ca", "label": "\u12ca", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12cb", "label": "\u12cb", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12cc", "label": "\u12cc", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12cd", "label": "\u12cd", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ce", "label": "\u12ce", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d0", "label": "\u12d0", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d1", "label": "\u12d1", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d2", "label": "\u12d2", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d3", "label": "\u12d3", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d4", "label": "\u12d4", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d5", "label": "\u12d5", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d6", "label": "\u12d6", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d8", "label": "\u12d8", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12d9", "label": "\u12d9", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12da", "label": "\u12da", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12db", "label": "\u12db", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12dc", "label": "\u12dc", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12dd", "label": "\u12dd", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12de", "label": "\u12de", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12df", "label": "\u12df", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e0", "label": "\u12e0", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e1", "label": "\u12e1", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e2", "label": "\u12e2", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e3", "label": "\u12e3", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e4", "label": "\u12e4", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e5", "label": "\u12e5", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e6", "label": "\u12e6", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e7", "label": "\u12e7", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e8", "label": "\u12e8", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12e9", "label": "\u12e9", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ea", "label": "\u12ea", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12eb", "label": "\u12eb", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ec", "label": "\u12ec", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ed", "label": "\u12ed", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12ee", "label": "\u12ee", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12f0", "label": "\u12f0", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12f1", "label": "\u12f1", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12f2", "label": "\u12f2", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12f3", "label": "\u12f3", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12f4", "label": "\u12f4", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12f5", "label": "\u12f5", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12f6", "label": "\u12f6", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u12f7", "label": "\u12f7", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1300", "label": "\u1300", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1301", "label": "\u1301", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1302", "label": "\u1302", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1303", "label": "\u1303", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1304", "label": "\u1304", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1305", "label": "\u1305", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1306", "label": "\u1306", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1307", "label": "\u1307", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1308", "label": "\u1308", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1309", "label": "\u1309", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u130a", "label": "\u130a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u130b", "label": "\u130b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u130c", "label": "\u130c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u130d", "label": "\u130d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u130e", "label": "\u130e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1313", "label": "\u1313", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1320", "label": "\u1320", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1321", "label": "\u1321", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1322", "label": "\u1322", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1323", "label": "\u1323", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1324", "label": "\u1324", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1325", "label": "\u1325", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1326", "label": "\u1326", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1327", "label": "\u1327", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1328", "label": "\u1328", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1329", "label": "\u1329", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u132a", "label": "\u132a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u132b", "label": "\u132b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u132c", "label": "\u132c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u132d", "label": "\u132d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u132e", "label": "\u132e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u132f", "label": "\u132f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1330", "label": "\u1330", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1331", "label": "\u1331", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1332", "label": "\u1332", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1333", "label": "\u1333", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1334", "label": "\u1334", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1335", "label": "\u1335", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1336", "label": "\u1336", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1337", "label": "\u1337", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1338", "label": "\u1338", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1339", "label": "\u1339", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u133a", "label": "\u133a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u133b", "label": "\u133b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u133c", "label": "\u133c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u133d", "label": "\u133d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u133e", "label": "\u133e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u133f", "label": "\u133f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1340", "label": "\u1340", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1341", "label": "\u1341", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1342", "label": "\u1342", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1343", "label": "\u1343", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1344", "label": "\u1344", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1345", "label": "\u1345", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1346", "label": "\u1346", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1348", "label": "\u1348", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1349", "label": "\u1349", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u134a", "label": "\u134a", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u134b", "label": "\u134b", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u134c", "label": "\u134c", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u134d", "label": "\u134d", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u134e", "label": "\u134e", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u134f", "label": "\u134f", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1350", "label": "\u1350", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1351", "label": "\u1351", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1352", "label": "\u1352", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1353", "label": "\u1353", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1354", "label": "\u1354", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1355", "label": "\u1355", "shape": "dot"}, {"color": "#97c2fc", "font": {"color": "white"}, "id": "\u1356", "label": "\u1356", "shape": "dot"}]);
                  edges = new vis.DataSet([{"from": "\u1200", "to": "\u122d", "value": "90"}, {"from": "\u1200", "to": "\u1260", "value": "180"}, {"from": "\u1200", "to": "\u1200", "value": "H"}, {"from": "\u1200", "to": "\u1201", "value": "add_line"}, {"from": "\u1201", "to": "\u1265", "value": "270"}, {"from": "\u1201", "to": "\u1261", "value": "V"}, {"from": "\u1203", "to": "\u1208", "value": "V"}, {"from": "\u1203", "to": "\u1202", "value": "add_line"}, {"from": "\u1206", "to": "\u1264", "value": "V"}, {"from": "\u1208", "to": "\u1209", "value": "add_line"}, {"from": "\u1208", "to": "\u120a", "value": "add_line"}, {"from": "\u120b", "to": "\u120f", "value": "add_line"}, {"from": "\u1210", "to": "\u1211", "value": "add_line"}, {"from": "\u1210", "to": "\u1212", "value": "add_line"}, {"from": "\u1213", "to": "\u1217", "value": "add_line"}, {"from": "\u1218", "to": "\u1218", "value": "H"}, {"from": "\u1218", "to": "\u1219", "value": "add_line"}, {"from": "\u1218", "to": "\u121b", "value": "add_line"}, {"from": "\u1218", "to": "\u121e", "value": "add_line"}, {"from": "\u121b", "to": "\u134c", "value": "180"}, {"from": "\u121b", "to": "\u121a", "value": "add_line"}, {"from": "\u1220", "to": "\u1320", "value": "180"}, {"from": "\u1220", "to": "\u1220", "value": "H"}, {"from": "\u1220", "to": "\u1221", "value": "add_line"}, {"from": "\u1221", "to": "\u1321", "value": "V"}, {"from": "\u1223", "to": "\u1222", "value": "add_line"}, {"from": "\u1223", "to": "\u1227", "value": "add_line"}, {"from": "\u1228", "to": "\u1308", "value": "180"}, {"from": "\u1228", "to": "\u1229", "value": "add_line"}, {"from": "\u1228", "to": "\u122d", "value": "add_line"}, {"from": "\u1229", "to": "\u130e", "value": "180"}, {"from": "\u122b", "to": "\u122f", "value": "add_line"}, {"from": "\u122c", "to": "\u130d", "value": "180"}, {"from": "\u122d", "to": "\u1260", "value": "90"}, {"from": "\u1230", "to": "\u1230", "value": "H"}, {"from": "\u1230", "to": "\u1231", "value": "add_line"}, {"from": "\u1230", "to": "\u1232", "value": "add_line"}, {"from": "\u1233", "to": "\u1236", "value": "H"}, {"from": "\u1233", "to": "\u1237", "value": "add_line"}, {"from": "\u1238", "to": "\u1238", "value": "H"}, {"from": "\u1238", "to": "\u1239", "value": "add_line"}, {"from": "\u1238", "to": "\u123a", "value": "add_line"}, {"from": "\u123b", "to": "\u123e", "value": "H"}, {"from": "\u123b", "to": "\u123f", "value": "add_line"}, {"from": "\u1240", "to": "\u1240", "value": "180"}, {"from": "\u1240", "to": "\u1241", "value": "add_line"}, {"from": "\u1240", "to": "\u1242", "value": "add_line"}, {"from": "\u1240", "to": "\u1243", "value": "add_line"}, {"from": "\u1240", "to": "\u124b", "value": "add_line"}, {"from": "\u1242", "to": "\u1243", "value": "H"}, {"from": "\u1243", "to": "\u1245", "value": "V"}, {"from": "\u1244", "to": "\u1246", "value": "V"}, {"from": "\u1246", "to": "\u1246", "value": "H"}, {"from": "\u124b", "to": "\u124b", "value": "H"}, {"from": "\u1260", "to": "\u1260", "value": "H"}, {"from": "\u1260", "to": "\u1261", "value": "add_line"}, {"from": "\u1260", "to": "\u1262", "value": "add_line"}, {"from": "\u1260", "to": "\u1265", "value": "add_line"}, {"from": "\u1260", "to": "\u1268", "value": "add_line"}, {"from": "\u1260", "to": "\u1230", "value": "add_line"}, {"from": "\u1261", "to": "\u1265", "value": "H"}, {"from": "\u1261", "to": "\u1269", "value": "add_line"}, {"from": "\u1262", "to": "\u126a", "value": "add_line"}, {"from": "\u1263", "to": "\u1266", "value": "H"}, {"from": "\u1263", "to": "\u1267", "value": "add_line"}, {"from": "\u1263", "to": "\u126b", "value": "add_line"}, {"from": "\u1264", "to": "\u126c", "value": "add_line"}, {"from": "\u1265", "to": "\u126d", "value": "add_line"}, {"from": "\u1266", "to": "\u126e", "value": "add_line"}, {"from": "\u1267", "to": "\u126f", "value": "add_line"}, {"from": "\u1268", "to": "\u1268", "value": "H"}, {"from": "\u1268", "to": "\u1269", "value": "add_line"}, {"from": "\u1268", "to": "\u126a", "value": "add_line"}, {"from": "\u1268", "to": "\u126d", "value": "add_line"}, {"from": "\u1269", "to": "\u126d", "value": "H"}, {"from": "\u126b", "to": "\u126e", "value": "H"}, {"from": "\u126b", "to": "\u126f", "value": "add_line"}, {"from": "\u1270", "to": "\u1270", "value": "90"}, {"from": "\u1270", "to": "\u1271", "value": "add_line"}, {"from": "\u1270", "to": "\u1272", "value": "add_line"}, {"from": "\u1270", "to": "\u1273", "value": "add_line"}, {"from": "\u1270", "to": "\u1277", "value": "add_line"}, {"from": "\u1270", "to": "\u1278", "value": "add_line"}, {"from": "\u1271", "to": "\u1279", "value": "add_line"}, {"from": "\u1272", "to": "\u1275", "value": "180"}, {"from": "\u1272", "to": "\u1273", "value": "H"}, {"from": "\u1272", "to": "\u1277", "value": "add_line"}, {"from": "\u1272", "to": "\u127a", "value": "add_line"}, {"from": "\u1273", "to": "\u1275", "value": "V"}, {"from": "\u1273", "to": "\u1277", "value": "add_line"}, {"from": "\u1273", "to": "\u127b", "value": "add_line"}, {"from": "\u1274", "to": "\u1276", "value": "V"}, {"from": "\u1274", "to": "\u127c", "value": "add_line"}, {"from": "\u1275", "to": "\u127d", "value": "add_line"}, {"from": "\u1276", "to": "\u1276", "value": "H"}, {"from": "\u1276", "to": "\u127e", "value": "add_line"}, {"from": "\u1277", "to": "\u12d9", "value": "90"}, {"from": "\u1277", "to": "\u1278", "value": "180"}, {"from": "\u1277", "to": "\u1277", "value": "H"}, {"from": "\u1277", "to": "\u127f", "value": "add_line"}, {"from": "\u1278", "to": "\u12d9", "value": "270"}, {"from": "\u1278", "to": "\u1278", "value": "H"}, {"from": "\u1278", "to": "\u1279", "value": "add_line"}, {"from": "\u1278", "to": "\u127a", "value": "add_line"}, {"from": "\u1278", "to": "\u127b", "value": "add_line"}, {"from": "\u1278", "to": "\u127f", "value": "add_line"}, {"from": "\u127a", "to": "\u127b", "value": "H"}, {"from": "\u127a", "to": "\u127f", "value": "add_line"}, {"from": "\u127b", "to": "\u127f", "value": "add_line"}, {"from": "\u127e", "to": "\u127e", "value": "H"}, {"from": "\u127f", "to": "\u127f", "value": "180"}, {"from": "\u1280", "to": "\u1281", "value": "add_line"}, {"from": "\u1280", "to": "\u1282", "value": "add_line"}, {"from": "\u1280", "to": "\u1283", "value": "add_line"}, {"from": "\u1290", "to": "\u1291", "value": "add_line"}, {"from": "\u1290", "to": "\u1292", "value": "add_line"}, {"from": "\u1293", "to": "\u130b", "value": "H"}, {"from": "\u1298", "to": "\u1298", "value": "add_line"}, {"from": "\u1298", "to": "\u1299", "value": "add_line"}, {"from": "\u1298", "to": "\u129a", "value": "add_line"}, {"from": "\u12a0", "to": "\u12a1", "value": "add_line"}, {"from": "\u12a0", "to": "\u12a2", "value": "add_line"}, {"from": "\u12a3", "to": "\u12a0", "value": "add_line"}, {"from": "\u12a6", "to": "\u12a0", "value": "add_line"}, {"from": "\u12a8", "to": "\u12a9", "value": "add_line"}, {"from": "\u12a8", "to": "\u12aa", "value": "add_line"}, {"from": "\u12ab", "to": "\u12a8", "value": "add_line"}, {"from": "\u12ae", "to": "\u12a8", "value": "add_line"}, {"from": "\u12b8", "to": "\u12b9", "value": "add_line"}, {"from": "\u12b8", "to": "\u12ba", "value": "add_line"}, {"from": "\u12bb", "to": "\u12b8", "value": "add_line"}, {"from": "\u12be", "to": "\u12b8", "value": "add_line"}, {"from": "\u12c8", "to": "\u1340", "value": "90"}, {"from": "\u12c8", "to": "\u12c8", "value": "180"}, {"from": "\u12c8", "to": "\u12c9", "value": "add_line"}, {"from": "\u12c8", "to": "\u12cd", "value": "add_line"}, {"from": "\u12c8", "to": "\u12cb", "value": "add_line"}, {"from": "\u12cb", "to": "\u1341", "value": "270"}, {"from": "\u12cb", "to": "\u12cb", "value": "H"}, {"from": "\u12d0", "to": "\u12d0", "value": "90"}, {"from": "\u12d0", "to": "\u12d1", "value": "add_line"}, {"from": "\u12d0", "to": "\u12d5", "value": "add_line"}, {"from": "\u12d1", "to": "\u12d1", "value": "V"}, {"from": "\u12d5", "to": "\u12d1", "value": "90"}, {"from": "\u12d5", "to": "\u12d5", "value": "H"}, {"from": "\u12d8", "to": "\u12d8", "value": "180"}, {"from": "\u12d8", "to": "\u12d9", "value": "add_line"}, {"from": "\u12d8", "to": "\u12da", "value": "add_line"}, {"from": "\u12d9", "to": "\u12d9", "value": "V"}, {"from": "\u12db", "to": "\u12de", "value": "H"}, {"from": "\u12db", "to": "\u12d8", "value": "add_line"}, {"from": "\u12de", "to": "\u12d8", "value": "add_line"}, {"from": "\u12e0", "to": "\u12e0", "value": "H"}, {"from": "\u12e0", "to": "\u12e1", "value": "add_line"}, {"from": "\u12e0", "to": "\u12e2", "value": "add_line"}, {"from": "\u12e3", "to": "\u12e6", "value": "H"}, {"from": "\u12e3", "to": "\u12e0", "value": "add_line"}, {"from": "\u12e6", "to": "\u12e0", "value": "add_line"}, {"from": "\u12e8", "to": "\u12e9", "value": "add_line"}, {"from": "\u12e8", "to": "\u12ee", "value": "add_line"}, {"from": "\u12eb", "to": "\u12d2", "value": "H"}, {"from": "\u12f0", "to": "\u12f0", "value": "H"}, {"from": "\u12f0", "to": "\u12f1", "value": "add_line"}, {"from": "\u12f0", "to": "\u12f2", "value": "add_line"}, {"from": "\u12f0", "to": "\u12f3", "value": "add_line"}, {"from": "\u12f3", "to": "\u12f6", "value": "H"}, {"from": "\u12f6", "to": "\u12f0", "value": "add_line"}, {"from": "\u1300", "to": "\u1300", "value": "H"}, {"from": "\u1300", "to": "\u1301", "value": "add_line"}, {"from": "\u1300", "to": "\u1302", "value": "add_line"}, {"from": "\u1303", "to": "\u1306", "value": "H"}, {"from": "\u1303", "to": "\u1300", "value": "add_line"}, {"from": "\u1306", "to": "\u1300", "value": "add_line"}, {"from": "\u1308", "to": "\u1309", "value": "add_line"}, {"from": "\u1308", "to": "\u130a", "value": "add_line"}, {"from": "\u1308", "to": "\u1290", "value": "add_line"}, {"from": "\u1320", "to": "\u1320", "value": "H"}, {"from": "\u1320", "to": "\u1210", "value": "add_line"}, {"from": "\u1321", "to": "\u1211", "value": "add_line"}, {"from": "\u1322", "to": "\u1212", "value": "add_line"}, {"from": "\u1323", "to": "\u1326", "value": "H"}, {"from": "\u1323", "to": "\u1213", "value": "add_line"}, {"from": "\u1324", "to": "\u1214", "value": "add_line"}, {"from": "\u1326", "to": "\u1216", "value": "add_line"}, {"from": "\u1328", "to": "\u1328", "value": "H"}, {"from": "\u1328", "to": "\u1329", "value": "add_line"}, {"from": "\u132b", "to": "\u132e", "value": "H"}, {"from": "\u1330", "to": "\u1330", "value": "H"}, {"from": "\u1330", "to": "\u1331", "value": "add_line"}, {"from": "\u1330", "to": "\u1332", "value": "add_line"}, {"from": "\u1333", "to": "\u1336", "value": "H"}, {"from": "\u1333", "to": "\u1330", "value": "add_line"}, {"from": "\u1333", "to": "\u1337", "value": "add_line"}, {"from": "\u1336", "to": "\u1330", "value": "add_line"}, {"from": "\u1338", "to": "\u1338", "value": "H"}, {"from": "\u1338", "to": "\u133d", "value": "add_line"}, {"from": "\u1338", "to": "\u1339", "value": "add_line"}, {"from": "\u1338", "to": "\u133a", "value": "add_line"}, {"from": "\u1338", "to": "\u1330", "value": "add_line"}, {"from": "\u1339", "to": "\u1331", "value": "add_line"}, {"from": "\u133a", "to": "\u1332", "value": "add_line"}, {"from": "\u133b", "to": "\u133e", "value": "H"}, {"from": "\u133b", "to": "\u1333", "value": "add_line"}, {"from": "\u133b", "to": "\u1338", "value": "add_line"}, {"from": "\u133c", "to": "\u1334", "value": "add_line"}, {"from": "\u133d", "to": "\u1335", "value": "add_line"}, {"from": "\u133e", "to": "\u1338", "value": "add_line"}, {"from": "\u133e", "to": "\u1336", "value": "add_line"}, {"from": "\u1340", "to": "\u1340", "value": "180"}, {"from": "\u1340", "to": "\u1341", "value": "add_line"}, {"from": "\u1340", "to": "\u1345", "value": "add_line"}, {"from": "\u1340", "to": "\u1343", "value": "add_line"}, {"from": "\u1345", "to": "\u12cd", "value": "90"}, {"from": "\u1348", "to": "\u1349", "value": "add_line"}, {"from": "\u134f", "to": "\u134d", "value": "add_line"}, {"from": "\u1350", "to": "\u1351", "value": "add_line"}, {"from": "\u1350", "to": "\u1353", "value": "add_line"}, {"from": "\u1350", "to": "\u1352", "value": "add_line"}, {"from": "\u1350", "to": "\u1270", "value": "add_line"}, {"from": "\u1351", "to": "\u1271", "value": "add_line"}, {"from": "\u1352", "to": "\u1272", "value": "add_line"}, {"from": "\u1353", "to": "\u1273", "value": "add_line"}, {"from": "\u1354", "to": "\u1274", "value": "add_line"}]);

                  nodeColors = {};
                  allNodes = nodes.get({ returnType: "Object" });
                  for (nodeId in allNodes) {
                    nodeColors[nodeId] = allNodes[nodeId].color;
                  }
                  allEdges = edges.get({ returnType: "Object" });
                  // adding nodes and edges to the graph
                  data = {nodes: nodes, edges: edges};

                  var options = {
    "configure": {
        "enabled": false
    },
    "edges": {
        "color": {
            "inherit": true
        },
        "smooth": {
            "enabled": true,
            "type": "dynamic"
        }
    },
    "interaction": {
        "dragNodes": true,
        "hideEdgesOnDrag": false,
        "hideNodesOnDrag": false
    },
    "physics": {
        "enabled": true,
        "stabilization": {
            "enabled": true,
            "fit": true,
            "iterations": 1000,
            "onlyDynamicEdges": false,
            "updateInterval": 50
        }
    }
};

                  


                  

                  network = new vis.Network(container, data, options);

                  

                  

                  


                  
                      network.on("stabilizationProgress", function(params) {
                          document.getElementById('loadingBar').removeAttribute("style");
                          var maxWidth = 496;
                          var minWidth = 20;
                          var widthFactor = params.iterations/params.total;
                          var width = Math.max(minWidth,maxWidth * widthFactor);
                          document.getElementById('bar').style.width = width + 'px';
                          document.getElementById('text').innerHTML = Math.round(widthFactor*100) + '%';
                      });
                      network.once("stabilizationIterationsDone", function() {
                          document.getElementById('text').innerHTML = '100%';
                          document.getElementById('bar').style.width = '496px';
                          document.getElementById('loadingBar').style.opacity = 0;
                          // really clean the dom element
                          setTimeout(function () {document.getElementById('loadingBar').style.display = 'none';}, 500);
                      });
                  

                  return network;

              }
              drawGraph();
        </script>
    </body>`}
          title="how To Play"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default HowToPlay;
