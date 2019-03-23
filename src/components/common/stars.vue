<template>
  <div class="evaStar">
    <span
      v-for="(starsList,index) in starsList"
      :key="index"
      :class="[starsList,sizes]"
      class="star-item"
      @click="stars(index)"  
    ></span>
  </div>
</template>


<script>
export default {
  props: {
    size: String
  },
  data() {
    return {
      score: 0,
    };
  },
  computed: {
    sizes(){
      return this.size;
    },
    starsList() {
      let result = []; 
      let score = Math.floor(this.score * 2) / 2; 
      let integer = Math.floor(score); 
      for (let i = 0; i < integer; i++) {
        result.push("on"); 
      }

      while (result.length < 5) {
        result.push("off");
      }
      return result;
    }
  },
  methods: {
    stars: function(index) {
      this.score = index + 1;
    }
  }
};
</script>

<style>
.evaStar {
  padding-top: 40px;
}
.star-item {
  display: inline-block;
  background-repeat: no-repeat;
  margin-left: 15px;
  background-size: 100%;
}
.small{
  width: 24px;
  height: 24px;
}
.big{
  width: 48px;
  height: 48px;
}
.star-item.on {
  background-image: url("../../../static/imgs/col_active.png");
}
.star-item.off {
  background-image: url("../../../static/imgs/col.png");
}
</style>