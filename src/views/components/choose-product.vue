<template>
  <div>
    <div class="head" id="test">
      <span>TESTSHOP</span>
    </div>
    <div class="body clearfix">
      <div class="body-right-title">
        当前分类:{{itemTitle}}
      </div>
      <div class="body-left" :style="bodyLeftStyle">
        <div class="body-left-item" v-for="item in products" :class="{'active':  $index===isActiveIndex }"
             @click="chooseCategory(item,$index)">
          {{item.category}}{{isActiveIndex}}
        </div>
      </div>
      <div class="body-right" :style="bodyRightStyle" id="bodyRight">
        <div id="totalHeight">
          <div class="body-right-item " v-for="item in products" id="item{{$index}}">
            <div class="body-right-item-category">{{item.category}}</div>
            <div class="body-right-item-categoryItem" v-for="categoryItem in item.categoryList">
              <span>{{categoryItem.name}}</span>
              <span class="add" @click="categoryItemClick(categoryItem)">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--底部-->
  <div class="foot">
    <div class="foot-price"></div>
    <div class="foot-confirm">结算</div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }

  .head {
    width: 100%;
    height: 50Px;
    line-height: 50Px;
    text-align: center;
    border-bottom: 1Px solid;
    box-sizing: border-box;
    span {
      color: rebeccapurple
    }
  }

  .body {
    width: 100%;
    position: relative;
    padding-bottom: 50Px;
    .body-right-title {
      position: absolute;
      top: 0;
      left: 30%;
      right: 0;
      text-align: left;
      background-color: #f0f0f0;
      padding: 5Px;
      font-size: 12Px;
      color: rebeccapurple;
      z-index: 11;
    }
    .body-left {
      width: 30%;
      float: left;
      text-align: center;
      box-sizing: border-box;
      background-color: #f0f0f0;
      overflow-y: scroll;
      .body-left-item {
        width: 100%;
        height: 60Px;
        line-height: 60Px;
        font-size: 12Px;
        border-bottom: 1Px solid #e5e5e5;
      }
      .active {
        background-color: #ffffff;
        color: #eb5252;
      }
    }
    .body-right {
      width: 70%;
      float: right;
      text-align: center;
      box-sizing: border-box;
      overflow-y: scroll;
      padding-left: 8Px;
      .body-right-item {
        .body-right-item-category {
          text-align: left;
          background-color: #f0f0f0;
          padding: 5Px;
          font-size: 12Px;
          color: rebeccapurple;
        }
        .body-right-item-categoryItem {
          padding: 25Px 0;
          /*line-height: 50Px;*/
          font-size: 12Px;
          border-bottom: 1Px solid #f0f0f0
        }
      }
    }
  }

  .foot {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50Px;
    background-color: #FFFFFF;
    .foot-confirm {
      height: 100%;
      width: 30%;
      float: right;
      background-color: #db5252;
      line-height: 50Px;
      text-align: center;
    }
  }

  .add {
    border: 1Px solid;
    width: 10Px;
    height: 10Px;
    display: inline-block;
    border-radius: 5Px;
    transform: scale(1.3);
    float: right;
    margin-right: 25Px;
  }
</style>
<script type="text/babel">
  export default {
    data () {
      return {
        products:   [
          {
            category: '水果', categoryList: [
            {name: '苹果'},
            {name: '橘子'},
            {name: '梨'},
            {name: '香蕉'},
            {name: '葡萄'},
            {name: '西瓜'},
            {name: '草莓'},
            {name: '樱桃'}]
          },
          {
            category: '肉类', categoryList: [
            {name: '鸡肉'},
            {name: '牛肉'},
            {name: '鱼肉'},
            {name: '猪肉'},
            {name: '羊肉'},
            {name: '兔子肉'},
            {name: '狗肉'}]
          },
          {
            category: '米饭', categoryList: [
            {name: '越南大米'},
            {name: '东北大米'},
            {name: '稻花香'}]
          },
          {
            category: '蔬菜', categoryList: [
            {name: '西红烧'},
            {name: '腐竹'},
            {name: '青菜'},
            {name: '香菇'},
            {name: '土豆'}]
          },
          {
            category: '关东煮', categoryList: [
            {name: '撒尿牛肉丸'},
            {name: '鱼丸'},
            {name: '贡丸'},
            {name: '北极翅'},
            {name: '甜不辣'}]
          },
          {
            category: '酱料', categoryList: [
            {name: '甜酱'},
            {name: '番茄酱'},
            {name: '海鲜酱'},
            {name: '醋'},
            {name: '辣椒'},
            {name: '海鲜酱'}]
          },
          {
            category: '蔬菜', categoryList: [
            {name: '西红烧'},
            {name: '腐竹'},
            {name: '青菜'},
            {name: '香菇'},
            {name: '土豆'}]
          }
        ],
        bodyLeftStyle: {},
        bodyRightStyle: {},
        isActiveIndex: 0,
        itemTitle: '',
        _initCategory: [],
        scrollMax: 0
      }
    },
    ready () {
      // 初始化
      this.itemTitle = this.products[0].category;
      // 浏览器的高度
      const winHeight = window.screen.height
      // test 的高度
      const testHeight = document.getElementById('test').offsetHeight
      // totalHeight的总高度
      const totalHeight = document.getElementById('totalHeight').offsetHeight
      // 滚动区域可视的高度
      const gdqy = winHeight- testHeight;
      // 滚动条可滚最大值
      this.scrollMax = totalHeight- gdqy;
      console.log('totalHeight',totalHeight,'gdqy',gdqy,'scrollMax', this.scrollMax)
      // 获取到 body-right
      const bodyRightDom = document.getElementById('bodyRight')
      // body-right初始时候的scrollTop
      let _bodyRightDomScrollTop = bodyRightDom.scrollTop

      // body-left/body-right 的 style属性
      this.bodyLeftStyle = {
        height: winHeight - testHeight + 'px'
      }
      this.bodyRightStyle = {
        height: winHeight - testHeight + 'px'
      }

      // 刚加载的时候获取每个类目距离顶部的高度
      // 初始化一个数组用来存这个高度的!
      const _initCategory = [];
      this.products.forEach((item, $index) => {
        let offsetTop = document.getElementById('item' + $index).offsetTop;
        let offsetHeight = document.getElementById('item' + $index).offsetHeight;
        _initCategory.push(offsetTop)
        console.log('item' + $index, '初始距离顶部:', offsetTop, '自身高度:', offsetHeight,_initCategory)
      })
      // 赋值过去
      this._initCategory = _initCategory


      // #bodyRight scroll事件
      bodyRightDom.onscroll = () => {
        _bodyRightDomScrollTop = bodyRightDom.scrollTop
//        console.log('_bodyRightDomScrollTop',_bodyRightDomScrollTop)
        this.products.forEach((item, $index) => {
          let _offsetTop = document.getElementById('item' + $index).offsetTop - _bodyRightDomScrollTop
          let _offsetHeight = document.getElementById('item' + $index).offsetHeight
          console.log('item'+$index,'距离顶部:', _offsetTop, '自身高度', _offsetHeight,'滚动条',_bodyRightDomScrollTop,'滚动条最大',this.scrollMax)
          // 当滚动条位置为最大值,那么激活最后一个选项!
          if(_bodyRightDomScrollTop === this.scrollMax ) {
            this.isActiveIndex =  this.products.length -1
            console.log(this.products)
          }else {
            if (_offsetTop <= 0 && - _offsetTop < _offsetHeight) {
              this.isActiveIndex = $index;
              this.itemTitle = item.category;
              console.log('滚动',$index,this.isActiveIndex)
            }
          }


        })
      }
    },
    methods: {
      categoryItemClick (item) {
        console.log(item.name)
      },
      chooseCategory (item, index) {
        const bodyRightDom = document.getElementById('bodyRight')
        this._initCategory.forEach((itemToTop, $index) => {
          if ($index === index) {
            console.log('itemToTop',itemToTop,this.scrollMax)
            this.isActiveIndex = index
              bodyRightDom.scrollTop = itemToTop
          }
        })
        console.log('isActiveIndex',this.isActiveIndex,'当前点击的index',index)
      }

    }
  }

</script>
