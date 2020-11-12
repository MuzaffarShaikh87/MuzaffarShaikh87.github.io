var myPresentation = new Presenta('#app',
  {
    colors: 'adele',
    transition: 'slideOver',
    controllers: {
      swiper: true
    },
    scenes: [
      {
        blocks: [
          {
            type: 'text',
            textVar: 'title',
            step: 'p,.step',
            text: `<h3><mark>Use Arrows to move forward</mark></h3>
              <h1><span class="step">This</span> 
              <span class="step">Title</span> 
              <span class="step">Steps</span></h1>
              <p>Also</p>
              <p>These</p>
              <p>Paragraphs</p>`
          }
        ]
      },
      {
        blocks: [
          {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=JtnPpxe8K7c'
          }
        ],
      },
      {
        blocks: [
          {
            type: 'text',
            text: '<h1>DONE!</h1>'
          }
        ],
      },
    ]
  }
)