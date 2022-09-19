$(function() {
  let number = 0;
  let videoData = null;
  const button = $("#btn");
  const videoArea = $("#video");
  const titleArea = $("#title");
  const contentArea = $("#content");

  function getData() {
    return $.ajax('ajax.json',{  //--3
      type: 'GET',
    })
  };

  function changeVideo() {
    button.click(function(){
      if (videoData == null) {
        getData().then(function(data){ 
          videoData = data
          videoArea.attr('src', videoData[number].url);
          titleArea.html(videoData[number].title);
          contentArea.html(videoData[number].content);
          number == 2 ? number = 0 : number++
        })
      }
      else {
        videoArea.attr('src', videoData[number].url);
        titleArea.html(videoData[number].title);
        contentArea.html(videoData[number].content);
        number == 2 ? number = 0 : number++
      }
    });
  };
  changeVideo();
})