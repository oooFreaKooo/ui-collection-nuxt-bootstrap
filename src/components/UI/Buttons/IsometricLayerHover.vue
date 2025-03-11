<template>
    <div class="container bg-dark d-flex justify-content-center align-items-center">
        <div class="scl-icon bi bi-twitter" />
        <div class="scl-icon bi bi-facebook" />
        <div class="scl-icon bi bi-linkedin" />
        <div class="scl-icon bi bi-youtube" />
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
$twitter:   #00acee;
$facebook:  #3b5998;
$linkedin:  #0e76a8;
$youtube:   #c4302b;

.container {
  height: 50vh;
}

@function shadow($color){
  $val : 0px 0px $color;
  @for $i from 1 through 5 {
    $val: #{$val}, #{$i * -10}px #{$i * 10}px rgba($color, 0.6 - $i/10 );
  }
  @return $val;
}

.scl-icon{
  width: 100px;
  height: 100px;
  color: #fff;
  background: #000;
  line-height: 100px;
  margin: 25px;
  text-align: center;
  font-size: 50px;
  transform: rotatex(45deg) rotate(-45deg);
  transition: 0.3s ease-in;
  display: inline-block;
  text-decoration:none;
  cursor: pointer;
  &:hover {
    transform: translatey(-50px) rotatex(45deg) rotate(-45deg);
  }
}

.bi-facebook{
  background: $facebook;
  &:hover {
    box-shadow: shadow($facebook);
  }
}

.bi-twitter{
  background: $twitter;
  &:hover {
    box-shadow: shadow($twitter);
  }
}

.bi-linkedin{
  background: $linkedin;
  &:hover {
    box-shadow: shadow($linkedin);
  }
}
.bi-youtube{
  background: $youtube;
  &:hover {
    box-shadow: shadow($youtube);
  }
}
</style>
