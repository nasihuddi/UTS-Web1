<script type="text/javascript">
  function menu() {
    var posting = document.getElementById('navbar');
    var header = document.getElementById('header');
    var k1 = document.getElementById('k1');
    var overview = document.getElementById('overview');
    const center = document.querySelectorAll('#center');
    const link = document.querySelectorAll('#text');

    link.forEach(link => {
      if (link.style.display === 'none') {
        link.style.display = 'block'; 
      } else {
          link.style.display = 'none';
      }
    });

    center.forEach(center => {
      if (center.style.justifyContent === 'center') {
        center.style.justifyContent = ''; 
      } else {
          center.style.justifyContent = 'center';
      }
    });

    if (posting.style.width === '100px') {
        posting.style.width = '300px'; 
    } else {
        posting.style.width = '100px';
    }

    if (header.style.marginLeft === '100px') {
        header.style.marginLeft = '300px'; 
    } else {
        header.style.marginLeft = '100px';
    }

    if (k1.style.marginLeft === '100px') {
        k1.style.marginLeft = '300px'; 
    } else {
        k1.style.marginLeft = '100px';
    }

    if (overview.style.marginLeft === '100px') {
        overview.style.marginLeft = '300px'; 
    } else {
        overview.style.marginLeft = '100px';
    }

  }
</script>