import $ from 'jquery';
import './points.css';

export const Points = ({ 
  children  
}) => {

  var x = 0;
$("#cookie").on('click', function(e) {
  x++;
  $("#cookie").append('<div id="x' + x + '" hidden>+1.0</div>');
  $("#x" + x).css("top", e.clientY);
  $("#x" + x).css("left", e.clientX - 10);
  $("#x" + x).css("position", "absolute");
  $("#x" + x).css("width", "25px");
  $("#x" + x).css("height", "25px");
  $("#x" + x).css("color", "magenta");
  $("#x" + x).css("font-weight", "bold");
  $("#x" + x).css("animation", "GoUp 2s forwards linear");
  $("#x" + x).show();
});
 return <div id="cookie">
    {children}
  </div>
}
export default Points