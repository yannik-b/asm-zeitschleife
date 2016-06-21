/*
Copyright 2016 Yannik Buerkle

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function () {
   "use strict";
   
   $(document).ready(function() {
   
       $(".register").on("keyup", function() {
           Assembler.berechneRegister();
           Assembler.berechneZeitschleife();
       });
   });
   
   var Assembler = {
       "berechneRegister" : function() {
           let takt = $("#takt").val() * 1000000; // Taktfrequenz in Hz
           let periodendauer = 1 / (takt / 6); // Dauer in Sekunden für 1 Maschinenzyklus
           let durchlaeufe = $("#dauer").val() / periodendauer; // Anzahl der benötgten DUrchläufe
   
           for (let j = 0; j < 8; j++) {
               if (durchlaeufe > 255) {
                   $("#r" + j).val(255);
                   durchlaeufe /= 255;
               }
               else if (durchlaeufe > 0) {
                   $("#r" + j).val(Math.round(durchlaeufe));
                   durchlaeufe = 0;
               }
               else {
                   $("#r" + j).val("");
               }
           }
       },
       "berechneZeitschleife": function() {
           let code = $("#zeitschleife");
           code.html("");
           //code.append("wait: ");
           for (var i = 0; i < 8; i++) {
               let register = $("#r" + i).val();
               if (register != "") {
                   code.prepend(((register < 255) ? "" : "loop" + (i + 1) + ": ") + " MOV R" + i + ", #" + register + "d<br>");
                   code.append((i==0 ? "loop0: " : "&nbsp;".repeat(7)) + "DJNZ R" + i + ", loop" + i + "<br>");
               }
           }
           code.prepend("wait:&nbsp;");
           code.append("RET");
       }
   };
})();
