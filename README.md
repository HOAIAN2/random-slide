# random-slide
### Usage ###
* Import randomSlide to your project:
  ```js
  import randomSlide from './random-slide'
* Select container by querySelector or anything else
    ```js 
    document.querySelector()
* Override all children layer (same position), the easiest way to do that is set `absolute` on CSS position
* Finally run code and enjoys random animation effects
    ```js
    randomSlide(containerNode, options)
Default option: `{direction = 'X', delay = 2000}`
## Here is Demo
https://user-images.githubusercontent.com/98139595/192511257-c752fa8b-7544-42eb-a26f-26cf4d51c676.mp4
