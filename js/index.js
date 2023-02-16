let dragItems = document.querySelectorAll(".drag-elem");
let  dropBlock = document.querySelector(".drop");
let dropCords = dropBlock.getBoundingClientRect();
dragItems.forEach(el =>{
    el.onmousedown = function(e) {

        var coords = getCoords(el);
        var shiftX = e.pageX - coords.left;
        var shiftY = e.pageY - coords.top;
      
        el.style.position = 'absolute';
        

      
        el.style.zIndex = 1000; // над другими элементами
      
        function moveAt(e) {
            el.style.left = e.clientX - shiftX + 'px';
            el.style.top = e.clientY - shiftY + 'px';
        }
      
        document.onmousemove = function(e) {
          moveAt(e);
        };
      
        el.onmouseup = function(e) {
            el.style.position = '';
            
            if((e.clientX > dropCords.x && e.clientX < (dropCords.right - dropCords.left)) && (e.clientY > dropCords.y && e.clientY <  (dropCords.y + dropCords.height) )){
                dropBlock.append(el)
                
            }
          document.onmousemove = null;
          el.onmouseup = null;
        };
      
        el.ondragstart = function() {
            return false;
          };

      }
})



function getCoords(elem) {   // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top,   
    left: box.left
}}
