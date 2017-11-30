<template>
  <div class="faceBox" v-show="value">
    <img v-for="(item, i) in facelist" @click="selectFace(item)" :key="i" v-lazy="getFace(item)" class="em_face" alt="">
  </div>
</template>
<script>
export default {
  name: 'TyFaceBox',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      facelist: [
        'bowtie',
        'smile',
        'laughing',
        'blush',
        'smiley',
        'relaxed',
        'smirk',
        'heart_eyes',
        'kissing_heart',
        'kissing_closed_eyes',
        'flushed',
        'relieved',
        'satisfied',
        'grin',
        'wink'
      ],
      allFace: [
        'stuck_out_tongue_winking_eye',
        'stuck_out_tongue_closed_eyes',
        'grinning',
        'kissing',
        'kissing_smiling_eyes',
        'stuck_out_tongue',
        'sleeping',
        'worried',
        'frowning',
        'anguished',
        'open_mouth',
        'grimacing',
        'confused',
        'hushed',
        'expressionless',
        'unamused',
        'sweat_smile',
        'sweat',
        'disappointed_relieved',
        'weary',
        'pensive',
        'disappointed',
        'confounded',
        'fearful',
        'cold_sweat',
        'persevere',
        'cry',
        'sob',
        'joy',
        'astonished',
        'scream',
        'neckbeard',
        'tired_face',
        'angry',
        'rage',
        'triumph',
        'sleepy',
        'yum',
        'mask',
        'sunglasses',
        'dizzy_face',
        'imp',
        'smiling_imp',
        'neutral_face',
        'no_mouth',
        'innocent',
        'alien',
        'yellow_heart',
        'blue_heart',
        'purple_heart',
        'heart',
        'green_heart',
        'broken_heart',
        'heartbeat',
        'heartpulse',
        'two_hearts',
        'revolving_hearts',
        'cupid',
        'sparkling_heart',
        'sparkles',
        'star',
        'star2',
        'dizzy',
        'boom',
        'collision',
        'anger',
        'exclamation',
        'question',
        'grey_exclamation',
        'grey_question',
        'zzz',
        'dash',
        'sweat_drops',
        'notes',
        'musical_note',
        'fire',
        'hankey',
        'poop',
        'shit',
        '+1',
        'thumbsup',
        '-1',
        'thumbsdown',
        'ok_hand',
        'punch',
        'facepunch',
        'fist',
        'v',
        'wave',
        'hand',
        'raised_hand',
        'open_hands',
        'point_up',
        'point_down',
        'point_left',
        'point_right',
        'raised_hands',
        'pray',
        'point_up_2',
        'clap',
        'muscle',
        'metal',
        'fu',
        'runner',
        'running',
        'couple',
        'family',
        'two_men_holding_hands',
        'two_women_holding_hands',
        'dancer',
        'dancers',
        'ok_woman',
        'no_good',
        'information_desk_person',
        'raising_hand',
        'bride_with_veil',
        'person_with_pouting_face',
        'person_frowning',
        'bow',
        'couplekiss',
        'couple_with_heart',
        'massage',
        'haircut',
        'nail_care',
        'boy',
        'girl',
        'woman',
        'man',
        'baby',
        'older_woman',
        'older_man',
        'person_with_blond_hair',
        'man_with_gua_pi_mao',
        'man_with_turban',
        'construction_worker',
        'cop',
        'angel',
        'princess',
        'smiley_cat',
        'smile_cat',
        'heart_eyes_cat',
        'kissing_cat',
        'smirk_cat',
        'scream_cat',
        'crying_cat_face',
        'joy_cat',
        'pouting_cat',
        'japanese_ogre',
        'japanese_goblin',
        'see_no_evil',
        'hear_no_evil',
        'speak_no_evil',
        'guardsman',
        'skull',
        'feet',
        'lips',
        'kiss',
        'droplet',
        'ear',
        'eyes',
        'nose',
        'tongue',
        'love_letter',
        'bust_in_silhouette',
        'busts_in_silhouette',
        'speech_balloon',
        'thought_balloon',
        'feelsgood',
        'finnadie',
        'goberserk',
        'godmode',
        'hurtrealbad',
        'rage1',
        'rage2',
        'rage3',
        'rage4',
        'suspect',
        'trollface'],
      imgObj: {
        src: '',
        error: require('../../assets/img/error.png'),
        loading: require('../../assets/img/error.png')
      }
    }
  },
  mounted() {
    //解决一次加载 页面假死
    setTimeout(() => {
      this.initFace()
    }, 2000)
  },
  methods: {
    selectFace: function (item) {
      let face = '<img src="static/emojis/' + item + '.png" />'
      this.$emit('selected-face', face)
      this.$emit('input', false)
    },
    getFace(name) {
      return Object.assign({}, this.imgObj, { src: 'static/emojis/' + name + '.png' })
    },
    initFace() {
      if (this.allFace.length > 0) {
        this.facelist = this.facelist.concat(this.allFace.splice(0, this.allFace.length > 20 ? 20 : this.allFace.length))
        setTimeout(() => {
          this.initFace()
        }, 2000)
      }
    }
  }
}
</script>
<style scoped lang="less">
.faceBox {
  margin: 0 10px;
  padding: 8px;
  border: 1px solid #ccc;
  overflow-y: auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
  height: 150px;
  position: absolute;
  bottom: 100px;
  z-index: 20;
  .faceTrans {
    cursor: pointer;
  }
  .em_face {
    width: 30px;
    height: 30px;
    margin: 2px;
  }
}
</style>
