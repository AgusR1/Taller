pos=[true, true, true, true, true, true];
var muestra_concepto=function()
{
  if (pos[0]==true)
  {
      var ingreso_concepto=$("#concepto option:selected").val();
      if (ingreso_concepto!="NULL" && document.getElementById("monto_concepto").value!="")
      {
        var monto_concepto_1=document.getElementById("monto_concepto").value;
        document.getElementById("nombre_concepto_1").value=ingreso_concepto;
        document.getElementById("monto_concepto_1").value=monto_concepto_1;
        $(document).ready(function()
        {
          $("#muestra_concepto_1").show("slow");
        });
        pos[0]=false;
        document.getElementById("monto_concepto").value="0";
      }
      else
      {
        alert("No se permiten campos vacios o personas repetidas");
      }
  }
}
  var quitar_persona1=function()
  {
    $(document).ready(function()
    {
      $("#persona_ingreso_1").hide();
    });
    document.getElementById("nombre_persona_1").value="";
    document.getElementById("fecha_persona_1").value="";
    document.getElementById("monto_persona_1").value="0";
    document.getElementById('carga_persona').disabled=false;
    $("#persona_ingreso_1").css("background", "#fadbd8");
    $("#persona_ingreso_1").css("border-left", "0.25rem solid rgb(231, 74, 59)");
    $("#fecha_persona_1").css("background", "#fadbd8");
    $("#monto_persona_1").css("background", "#fadbd8");
    $("#nombre_persona_1").css("background", "#fadbd8");
    $("#nom_id_1").css("background", "#fadbd8");
    $("#fecha_1").css("background", "#fadbd8");
    $("#monto_1").css("background", "#fadbd8");
    pos[0]=true;
    if (pos[0]==true && pos[1]==true && pos[2]==true && pos[3]==true && pos[4]==true && pos[5]==true)
    {
      document.getElementById('acepta_formulario').disabled=true;
    }
  }
  var monto_check=function()
  {
    var total=document.getElementById("monto_total").value;
    var monto1=document.getElementById("monto_persona_1").value;
    var monto2=document.getElementById("monto_persona_2").value;
    var monto3=document.getElementById("monto_persona_3").value;
    var monto4=document.getElementById("monto_persona_4").value;
    var monto5=document.getElementById("monto_persona_5").value;
    var monto6=document.getElementById("monto_persona_6").value;
    parseFloat(total);
    var sum=parseFloat(monto1)+parseFloat(monto2)+parseFloat(monto3)+parseFloat(monto4)+parseFloat(monto5)+parseFloat(monto6);
    if (total!=sum)
    {
      parseFloat(sum);
      total=sum;
      document.getElementById("monto_total").value=total;
    }
    if (pos[0]==false)
    {
      $("#persona_ingreso_1").css("background", "#d4edda");
      $("#persona_ingreso_1").css("border-left", ".25rem solid #155724");
      $("#fecha_persona_1").css("background", "#d4edda");
      $("#monto_persona_1").css("background", "#d4edda");
      $("#nombre_persona_1").css("background", "#d4edda");
      $("#nom_id_1").css("background", "#d4edda");
      $("#fecha_1").css("background", "#d4edda");
      $("#monto_1").css("background", "#d4edda");
      document.getElementById('acepta_formulario').disabled=false;
    }
    if (pos[1]==false)
    {
      $("#persona_ingreso_2").css("background", "#d4edda");
      $("#persona_ingreso_2").css("border-left", ".25rem solid #155724");
      $("#fecha_persona_2").css("background", "#d4edda");
      $("#monto_persona_2").css("background", "#d4edda");
      $("#nombre_persona_2").css("background", "#d4edda");
      $("#nom_id_2").css("background", "#d4edda");
      $("#fecha_2").css("background", "#d4edda");
      $("#monto_2").css("background", "#d4edda");
      document.getElementById('acepta_formulario').disabled=false;
    }
    if (pos[2]==false)
    {
      $("#persona_ingreso_3").css("background", "#d4edda");
      $("#persona_ingreso_3").css("border-left", ".25rem solid #155724");
      $("#fecha_persona_3").css("background", "#d4edda");
      $("#monto_persona_3").css("background", "#d4edda");
      $("#nombre_persona_3").css("background", "#d4edda");
      $("#nom_id_3").css("background", "#d4edda");
      $("#fecha_3").css("background", "#d4edda");
      $("#monto_3").css("background", "#d4edda");
      document.getElementById('acepta_formulario').disabled=false;
    }
    if (pos[3]==false)
    {
      $("#persona_ingreso_4").css("background", "#d4edda");
      $("#persona_ingreso_4").css("border-left", ".25rem solid #155724");
      $("#fecha_persona_4").css("background", "#d4edda");
      $("#monto_persona_4").css("background", "#d4edda");
      $("#nombre_persona_4").css("background", "#d4edda");
      $("#nom_id_4").css("background", "#d4edda");
      $("#fecha_4").css("background", "#d4edda");
      $("#monto_4").css("background", "#d4edda");
      document.getElementById('acepta_formulario').disabled=false;
    }
    if (pos[4]==false)
    {
      $("#persona_ingreso_5").css("background", "#d4edda");
      $("#persona_ingreso_5").css("border-left", ".25rem solid #155724");
      $("#fecha_persona_5").css("background", "#d4edda");
      $("#monto_persona_5").css("background", "#d4edda");
      $("#nombre_persona_5").css("background", "#d4edda");
      $("#nom_id_5").css("background", "#d4edda");
      $("#fecha_5").css("background", "#d4edda");
      $("#monto_5").css("background", "#d4edda");
      document.getElementById('acepta_formulario').disabled=false;
    }
    if (pos[5]==false)
    {
      $("#persona_ingreso_6").css("background", "#d4edda");
      $("#persona_ingreso_6").css("border-left", ".25rem solid #155724");
      $("#fecha_persona_6").css("background", "#d4edda");
      $("#monto_persona_6").css("background", "#d4edda");
      $("#nombre_persona_6").css("background", "#d4edda");
      $("#nom_id_6").css("background", "#d4edda");
      $("#fecha_6").css("background", "#d4edda");
      $("#monto_6").css("background", "#d4edda");
      document.getElementById('acepta_formulario').disabled=false;
    }
  }
