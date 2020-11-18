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
              <h1><span class="step">Hi There</span> 
              <span class="step">Welcome</span> 
              <span class="step">to</span> 
              <span class="step">Presenta</span> 
              <span class="step">This</span> 
              <span class="step">is</span> 
              <span class="step">Slide</span> 
              <span class="step">Layout</span> 
              <span class="step">to</span>
              <span class="step">Demonstrate</span></h1>
              <p>Also</p>
              <p>These</p>
              <p>Paragraphs</p>`
          }
        ]
      },
      {
        blocks: [
          {
            type: 'embed',
            url: 'https://muzaffarshaikh87.github.io/Video/index.html'
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