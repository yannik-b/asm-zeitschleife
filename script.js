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
                code.append((i==0 ? "loop0: " : "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;") + "DJNZ R" + i + ", loop" + i + "<br>");
            }
        }
        code.prepend("wait:&nbsp;");
        code.append("RET");
    }
};
