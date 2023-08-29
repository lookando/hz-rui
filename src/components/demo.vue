<style="color:rgb(98 189 255)">template>
  <style="color:rgb(255 111 119)">div
    class="style="color:rgb(98 189 255)">my-dropdown"
    @style="color:rgb(255 95 0)">click.sstyle="color:rgb(255 111 119)">top="style="color:rgb(253 97 106)">trigger == 'style="color:rgb(255 95 0)">click' ? (style="color:rgb(98 189 255)">showMenu = !style="color:rgb(98 189 255)">showMenu) : ''"
    @mouseenter="style="color:rgb(253 97 106)">trigger == 'hover' ? (style="color:rgb(98 189 255)">showMenu = true) : ''"
    @mouseleave="style="color:rgb(253 97 106)">trigger == 'hover' ? (style="color:rgb(98 189 255)">showMenu = false) : ''"
    ref="style="color:rgb(98 189 255)">myDropDdown"
  >
    <style="color:rgb(255 111 119)">div class="style="color:rgb(98 189 255)">tip-text" ref="style="color:rgb(253 97 106)">tipText">
      <style="color:rgb(73 238 255)">slot></style="color:rgb(73 238 255)">slot>
    </style="color:rgb(255 111 119)">div>
    <style="color:rgb(73 238 255)">slot style="color:rgb(73 238 255)">name="style="color:rgb(73 238 255)">list"></style="color:rgb(73 238 255)">slot>
  </style="color:rgb(255 111 119)">div>
</style="color:rgb(98 189 255)">template>
<style="color:rgb(255 211 0)">script>
import emitter from "./emitter";
export style="color:rgb(253 97 106)">default {
  style="color:rgb(73 238 255)">name: "style="color:rgb(98 189 255)">MyDropdown",
  style="color:rgb(98 189 255)">componentName: "style="color:rgb(98 189 255)">MyDropdown",
  style="color:rgb(255 211 0)">mixins: [emitter],
  style="color:rgb(255 95 0)">props: {
    // 触发显示方式
    style="color:rgb(253 97 106)">trigger: {
      style="color:rgb(73 238 255)">type: String,
      style="color:rgb(253 97 106)">default: "style="color:rgb(255 95 0)">click",
    },
    // 下来菜单的出现位置（上方，下方）
    style="color:rgb(98 189 255)">placement: {
      style="color:rgb(73 238 255)">type: String,
      style="color:rgb(253 97 106)">default: "style="color:rgb(255 211 0)">bottom",
      style="color:rgb(98 189 255)">validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["style="color:rgb(255 211 0)">bottom", "style="color:rgb(255 111 119)">top"].includes(value);
      },
    },
  },
  data() {
    return {
    //控制菜单是否显示
      style="color:rgb(98 189 255)">showMenu: false,
    };
  },
  mounted() {
      //初始化自定义事件
    style="color:rgb(73 238 255)">this.initEvent();
  },
  style="color:rgb(253 97 106)">methods: {
    // 初始化
    initEvent() {
    //订阅当item点击的时候，发布on-style="color:rgb(255 95 0)">click事件，告知外部
      style="color:rgb(73 238 255)">this.$on("item-style="color:rgb(255 95 0)">click", (params) => {
        style="color:rgb(73 238 255)">this.$emit("on-style="color:rgb(255 95 0)">click", params);
        style="color:rgb(73 238 255)">this.style="color:rgb(98 189 255)">showMenu = false;
      });
      //空白点击要隐藏菜单，需要执行的函数需要绑定style="color:rgb(73 238 255)">this指向
      style="color:rgb(73 238 255)">this.style="color:rgb(98 189 255)">handleEmptyDomElementClickBindThis =
        style="color:rgb(73 238 255)">this.style="color:rgb(98 189 255)">handleEmptyDomElementClick.bind(style="color:rgb(73 238 255)">this);
      style="color:rgb(255 211 0)">window.addEventListener("style="color:rgb(255 95 0)">click", style="color:rgb(73 238 255)">this.style="color:rgb(98 189 255)">handleEmptyDomElementClickBindThis);
    },
    // 处理空白区域点击，隐藏菜单列表
    style="color:rgb(98 189 255)">handleEmptyDomElementClick(e) {
      if (!style="color:rgb(255 95 0)">Array.from(style="color:rgb(73 238 255)">this.$style="color:rgb(73 238 255)">refs.style="color:rgb(98 189 255)">myDropDdown.childNodes).includes(e.target)) {
        style="color:rgb(73 238 255)">this.style="color:rgb(98 189 255)">showMenu = false;
      }
    },
  },
  beforeDestroy() {
    // 移除style="color:rgb(255 211 0)">window上面的事件
    style="color:rgb(255 211 0)">window.removeEventListener(style="color:rgb(73 238 255)">this.style="color:rgb(98 189 255)">handleEmptyDomElementClickBindThis);
  },
  style="color:rgb(255 95 0)">watch: {
  //变化的时候，通知子组件隐藏菜单列表
    style="color:rgb(98 189 255)">showMenu() {
      style="color:rgb(73 238 255)">this.broadcast("style="color:rgb(98 189 255)">MyDropdownMenu", "style="color:rgb(98 189 255)">set-menu-status", style="color:rgb(73 238 255)">this.style="color:rgb(98 189 255)">showMenu);
    },
  },
};
</style="color:rgb(255 211 0)">script>
<style lang="style="color:rgb(73 238 255)">less">
.style="color:rgb(98 189 255)">my-dropdown {
  style="color:rgb(98 189 255)">position: relative;
}
</style>
