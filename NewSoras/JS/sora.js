function schdule_accordion() {

}

$(document).ready(function(){
  //nav menu
  var nav_indexs = ['Home','Contact','Biography','Media','Concerts','News'];
  // big languges
  var bio_languges_indexs = ['English','French','Korean'];

  var to_schedule_year = 2022;
  var bf_schedule_year = 0;


  // home functions
  for (var i = 0; i < nav_indexs.length; i++) {
      $("#nav_indexs").append('<li><a href="./'+nav_indexs[i]+'.html">'+ nav_indexs[i] +'</a></li>');
  }

  // bio functions
  for (var i = 0; i < bio_languges_indexs.length; i++) {
      $(".bio_languges").append('<li><a><label for="button_'+bio_languges_indexs[i]+'">'+bio_languges_indexs[i]+'</label></a></li>');
  }


  // schedule functions
  //스케쥴 아코디언
  for (var i = 1; i <= 3; i++) {
    var bf_schedule_year = to_schedule_year-1;
    if(i==1){
      $(".schdule_accordion").append('<input type="checkbox" id="schdulelist_0'+i+'" checked> <label for="schdulelist_0'+i+'">'+bf_schedule_year+' - '+to_schedule_year+'</label> <div class="yearlist" id='+bf_schedule_year+'-'+to_schedule_year+'>');
    }else{
      $(".schdule_accordion").append('<input type="checkbox" id="schdulelist_0'+i+'"> <label for="schdulelist_0'+i+'">'+bf_schedule_year+' - '+to_schedule_year+'</label> <div class="yearlist" id='+bf_schedule_year+'-'+to_schedule_year+'>');
    }
    var to_schedule_year = bf_schedule_year;
  }
  // 2021 - 2022 스케쥴 표 세부내용
  for (var i = 0; i < 2; i++) {
    $("#2021-2022").append('<div class="schedule_details" id="schedule_details_21_'+i+'"><div class="schedule_date" id="2021-2022_'+i+'"> </div><div class="schedule_info" id="schedule_21_info_'+i+'"></div></div>');
    $("#2021-2022_"+i).append('<div class="date_box_month" id="year_21_box_month_'+i+'"></div><div class="date_box_day" id="year_21_box_day_'+i+'"></div>');

    if(i == 0){
      $("#year_21_box_month_"+i).append('<p>MAY</p>');
      $("#year_21_box_day_"+i).append('<p><b>9-21</b></p>');
      $("#schedule_21_info_"+i).append('<h3><b>&nbsp;&nbsp; Arturo Toscanini Workshop</b></h3> <p>09 - 21  May, 2021 <br>Musicale Arturo Touscanini , Parma</p> <br> <p>Centro di Produzione</p> <br><br> <h6>Program to be announced.</h6>');
    }else {
      $("#year_21_box_month_"+i).append('<p>MAR</p>');
      $("#year_21_box_day_"+i).append('<p><b>6</b></p>');
      $("#schedule_21_info_"+i).append('<h3><b>&nbsp;&nbsp; Orchestre Pasdeloup</b></h3> <p>6  March 2021 , 16:00<br>Salle Gaveau, Paris</p> <br><br><br> <h6> <b>W.A Mozart Symphony No.41 «Jupiter» </b> <br><br> Oboe concerto : Nicky Hautefeuille <br><br> Don Giovanni Overture</h6> <br><br> <h6><b>J. Haydn</b> <br><br> Trumpet concerto :  Frédéric Foucher</h6>');


    }
  }

  // 2020 - 2021 스케쥴 표 세부내용
  for (var i = 0; i < 3; i++) {
    $("#2020-2021").append('<div class="schedule_details" id="schedule_details_20_'+i+'"><div class="schedule_date" id="2020-2021_'+i+'"> </div><div class="schedule_info" id="schedule_20_info_'+i+'"></div></div>');
    $("#2020-2021_"+i).append('<div class="date_box_month" id="year_20_box_month_'+i+'"></div><div class="date_box_day" id="year_20_box_day_'+i+'"></div>');

    if(i == 0){
      $("#year_20_box_month_"+i).append('<p>DEC</p>');
      $("#year_20_box_day_"+i).append('<p><b>12-13</b></p>');
      $("#schedule_20_info_"+i).append('<h3><b>&nbsp;&nbsp; Orchestre symphonique de Tours</b></h3> <br> <p>12 December  2020 , 18:15 & 20:30 <br> Le Grand Théâtre de Tours, Tours</p> <br> <p>13 December  2020 , 15:15 & 17:30 <br> Le Grand Théâtre de Tours, Tours</p>   <br><br><h6><b>F. Schubert</b> &nbsp;&nbsp; Symphony No.6</h6> <br> <h6><b>F.Mendelssohn</b>&nbsp;&nbsp; Symphony No.4 « Italian »</h6>');
    }else if (i == 1) {
      $("#year_20_box_month_"+i).append('<p>APR</p>');
      $("#year_20_box_day_"+i).append('<p><b>23-24</b></p>');
      $("#schedule_20_info_"+i).append('<h3><b>&nbsp;&nbsp; Orchestre symphonique de Tours</b></h3> <br> <p>23  April 2020 <br> Hangar, Chalette-sur-Loing </p> <br> <p>24  April 2020 <br> L'+"'"+'Atelier a spectacle, Vernouille </p> <br><br><h6><b>F. Schubert</b> &nbsp;&nbsp; Overture de Rosamunde, op.26</h6> <br> <h6><b>R. Wagner</b>&nbsp;&nbsp; Siegfried-Idyll</h6> <br> <h6><b>F. Schubert</b> &nbsp;&nbsp; Symphony No.4</h6> ');
    }else {
      $("#year_20_box_month_"+i).append('<p>JAN</p>');
      $("#year_20_box_day_"+i).append('<p><b>17-19</b></p>');
      $("#schedule_20_info_"+i).append('<h3><b>&nbsp;&nbsp; Orchestre symphonique de Tours</b></h3> <p>17 January  2020 , 20:30 <br> Salle des fêtes, Belleville-Sur-Loire</p> <p>18 January  2020 , 20:00 <br> Salle polyvalente Crôt Blin, Levet</p> <p>19 January 2020 , 15:30 <br> Salle Yves Renault, Chambray-les-Tours</p><br><h6><b>R. Wagner</b>&nbsp;&nbsp;<br><br>Valse-fantasie</h6> <br> <h6><b>Josef Strauss</b>&nbsp;&nbsp;<br><br>Die Ersten nach den Letzten</h6> <br> <h6><b>J. Strauss II</b>&nbsp;&nbsp;<br><br>Pizzicato Polka, &nbsp;&nbsp; Explosions Polka, &nbsp;&nbsp; Radetzky Marsch</h6> <br> <h6><b>E. Chabrier</b>&nbsp;&nbsp;<br><br>Fete Polonaise extraits: Le loi Malgré Lui</h6> <br> <h6><b>J. Haydn</b>&nbsp;&nbsp;<br><br>Symphony No.45 Mov.IV</h6> <br> <h6><b>G. Rossini</b>&nbsp;&nbsp;<br><br>Ouverture de Barbier de Seville</h6> <br> <h6><b>H.C. Lumbye</b>&nbsp;&nbsp;<br><br>Champagner-Galopp</h6>');

    }
  }

  // 2019 - 2020 스케쥴 표 세부내용
  for (var i = 0; i < 4; i++) {
    $("#2019-2020").append('<div class="schedule_details" id="schedule_details_19_'+i+'"><div class="schedule_date" id="2019-2020_'+i+'"> </div><div class="schedule_info" id="schedule_19_info_'+i+'"></div></div>');
    $("#2019-2020_"+i).append('<div class="date_box_month" id="year_19_box_month_'+i+'"></div><div class="date_box_day" id="year_19_box_day_'+i+'"></div>');
    if(i == 0){
      $("#year_19_box_month_"+i).append('<p>NOV</p>');
      $("#year_19_box_day_"+i).append('<p><b>17</b></p>');
      $("#schedule_19_info_"+i).append('<h3><b>&nbsp;&nbsp; Les Siècles</b></h3> <br> <p>17  November 2019 , 15:00 <br>  Salle des concerts, Cité de la musique, Paris</p></h6> <br><br> <h6><b>J-B. Lully</b>&nbsp;&nbsp;Le Bourgeois gentilhomme</h6> <br> <h6><b>R. Strauss</b> &nbsp;&nbsp; Le Bourgeois gentilhomme</h6> ');
    }else if (i == 1) {
      $("#year_19_box_month_"+i).append('<p>NOV</p>');
      $("#year_19_box_day_"+i).append('<p><b>8</b></p>');
      $("#schedule_19_info_"+i).append('<h3><b>&nbsp;&nbsp; Orchestre de chambre de Paris</b></h3> <br> <p>8  November 2019 , 12:30 <br>  Grande Salle, Théâtre du Châtelet, Paris</p></h6> <br><br> <h6><b>W.A. Mozart</b><br><br> The Abduction from the seraglio overture K. 384</h6> <br> <h6><b>G. Benjamin</b> <br><br>Duet for piano and orchestra <br><br> Piano: Lorenzo Soulés</h6> ');
    }else if (i == 2) {
      $("#year_19_box_month_"+i).append('<p>SEP</p>');
      $("#year_19_box_day_"+i).append('<p><b>19-21</b></p>');
      $("#schedule_19_info_"+i).append('<h3><b>&nbsp;&nbsp; Orchestre philharmonique de Strasbourg</b></h3> <br> <p>19  September 2019 , 20:00 <br>  Palais Universitaire de Strasbourg</p>  <p>20  September 2019 , 20:00 <br>  Eglise Saints-Pierre-et-Paul, Hochfelden</p>  <p>21  September 2019 , 20:00 <br>  EcRhin, Gambsheim</p></h6> <br><br> <h6><b>B. Bartok</b><br><br> Romanian Folk Dances</h6> <br> <h6><b>A. Piazzola</b> <br><br>  Four Seasons of Buenos Aires <br><br>   Violin: Diana Tishchenko</h6> ');
    } else {
      $("#year_19_box_month_"+i).append('<p>SEP</p>');
      $("#year_19_box_day_"+i).append('<p><b>18</b></p>');
      $("#schedule_19_info_"+i).append('<h3><b>&nbsp;&nbsp; Orchestre philharmonique de Strasbourg</b></h3> <br> <p>18  eptember  2019 , 20:30 <br>  Palais Universitaire de Strasbourg</p></h6> <br><br> <h6><b>A. Piazzola</b><br><br> Four Seasons of Buenos Aires<br><br>Violin: Diana Tishchenko</h6> <br> <h6><b>L. van Beethoven</b> <br><br>Symphony No.6</h6> ');


    }
  }

});
