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
        <div class="body-left-item" v-for="item in products" :class="{'active': $index===isActiveIndex}">{{item.category}}</div>
      </div>
      <div class="body-right" :style="bodyRightStyle" id="bodyRight">
        <div>
          <div class="body-right-item" v-for="item in products" id="item{{$index}}">
            <div class="body-right-item-category">{{item.category}}</div>
            <div class="body-right-item-categoryItem" v-for="categoryItem in item.categoryList">{{categoryItem.name}}
            </div>
          </div>
        </div>
      </div>
    </div>
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
      color :rebeccapurple
    }
  }

  .body {
    width: 100%;
    position :relative;
    .body-right-title {
      position :absolute;
      top: 0;
      left :30%;
      right :0;
      text-align: left;
      background-color: #f0f0f0;
      padding: 5Px;
      font-size :12Px;
      color :rebeccapurple;
    }
    .body-left {
      width: 30%;
      float: left;
      text-align: center;
      box-sizing: border-box;
      border-bottom: 1px solid;
      background-color : #f0f0f0;
      .body-left-item {
        width: 100%;
        height: 60Px;
        line-height: 60Px;
        font-size: 12Px;
        border-bottom: 1Px solid #e5e5e5;
      }
      .active {
        background-color :#ffffff;
        color :#eb5252;
      }
    }
    .body-right {
      width: 70%;
      float: right;
      text-align: center;
      box-sizing: border-box;
      overflow-y: scroll;
      border-bottom: 1Px solid;
      padding-left :8Px;
      .body-right-item {
        .body-right-item-category {
          text-align: left;
          background-color: #f0f0f0;
          padding: 5Px;
          font-size :12Px;
          color :rebeccapurple;
        }
        .body-right-item-categoryItem {
          height: 50Px;
          line-height: 50Px;
          font-size: 12Px;
          border-bottom: 1Px solid #f0f0f0
        }
      }
    }
  }

</style>
<script type="text/babel">
  export default {
    data () {
      return {
        products: [
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
            {name: '精选大米'}]
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
          }
        ],
        bodyLeftStyle: {},
        bodyRightStyle: {},
        isActiveIndex: 0,
        itemTitle:''
      }
    },
    ready () {
      this.itemTitle = this.products[0].category;
      // 浏览器的高度
      const winHeight = window.screen.height
      // test 的高度
      const testHeight = document.getElementById('test').offsetHeight
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
      // 刚加载的是获取距离顶部的高度
      this.products.forEach((item,$index) => {
        let  offsetTop = document.getElementById('item'+$index).offsetTop - testHeight
        let  offsetHeight = document.getElementById('item'+$index).offsetHeight
        console.log('item'+$index,'初始距离顶部:', offsetTop,'自身高度:',offsetHeight)
      })


      // #bodyRight scroll事件
      bodyRightDom.onscroll =  () => {
        _bodyRightDomScrollTop = bodyRightDom.scrollTop
        // console.log(_bodyRightDomScrollTop)
        this.products.forEach((item,$index) => {
          let _offsetTop = document.getElementById('item'+$index).offsetTop - testHeight- _bodyRightDomScrollTop
          let _offsetHeight = document.getElementById('item'+$index).offsetHeight

          // console.log('item'+$index,'距离顶部:', _offsetTop,'自身高度:',_offsetHeight)
          if (_offsetTop < 0 && -_offsetTop < _offsetHeight) {
            this.isActiveIndex = $index;
            this.itemTitle = item.category;
            console.log(item.category,$index)

          }

        })
      }
    }
  }

</script>
