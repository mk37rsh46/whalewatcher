<template>
<div class = "intro">
  <h1>
    Whale Jokes!
    <hr/>
  </h1>
  <div>
    <transition name="fade" mode="out-in">
      <p key=1 v-if=this.switch>     
        {{selectedQuestion}}<br> <br>
        {{selectedPunchline}}
      </p>
      <p key=2 v-else>
        {{selectedQuestion}}<br> <br>
        {{selectedPunchline}}
      </p>
    </transition>
  </div>
</div>
</template>

<script>
const whalejoek = [
  {
    joke: 'What do whales eat?',
    punchline: 'Fish and ships',
  },
  {
    joke: 'What do whales like to chew?',
    punchline: 'Blubber gum!',
  },
    {
    joke: 'What do you call a baby whale?',
    punchline: 'A little squirt!',
  },
    {
    joke: 'Why did the whale cross the road?',
    punchline: 'To get to the other tide!',
  },
  {
    joke: 'How do you make a fish laugh?',
    punchline: 'Tell a whale of a tale.',
  },
    {
    joke: 'Where are whales weighed?',
    punchline: 'At a whale weigh station.',
  },
  {
    joke: 'How do whales prepare for a party?',
    punchline: 'They orca-nise it.',
  },
  {
    joke: 'What od whales like to draw with',
    punchline: 'A-krill-ic paint',
  },
];
export default {
    name: 'WhaleFacts',
    data() {
        return {
          whaleJokes: [],
          index: 0,
          selectedJoke:undefined,
          selectedPunchline:'',
          selectedQuestion:'',
          switch: true,
        }
    },

    created() {
        this.setJokes();
        this.loadJokes();
    },
    methods: {
        setJokes(){
            this.whaleJokes = whalejoek;
            this.selectedJoke=this.whaleJokes[this.index];
            
        },
        loadJokes(){
          this.selectedJoke=this.whaleJokes[this.index];
          this.selectedPunchline=this.selectedJoke.punchline;
          this.selectedQuestion=this.selectedJoke.joke;
        },
        newJoke(){
          if(this.index==7){
            this.index = 0;
          }
          else{
            this.index++;
          }
          this.switch = !this.switch;
          this.loadJokes();
        },
    },
    mounted: function () {
  window.setInterval(() => {
    this.newJoke()
  }, 5000)
}
}
</script>
<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.intro{
  background-color: lightgrey;
  width: 300px;
  max-width:300px;
  border: 15px solid green;

}
</style>
