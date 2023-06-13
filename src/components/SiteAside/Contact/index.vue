<template>
  <ul class="contact-container">
    <li>
      <a href="">
        <div class="icon">
          <Icon type="github" />
        </div>
        <span>Profile</span>
      </a>
    </li>
    <li>
      <a href="mailto:1461932662@qq.com">
        <div class="icon">
          <Icon type="mail" />
        </div>
        <span>1461932662@qq.com</span>
      </a>
    </li>
    <li>
      <a href="tencent://message/?Menu=yes&uin=3263023350&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
        <div class="icon">
          <Icon type="qq" />
        </div>
        <span>1461932662</span>
      </a>
      <div class="pop">
        <img src="https://test-statics-quanmin.cd.xiaoxigroup.net/qmip-basic-file/test/2023-02-06/1675678379961.png" alt="">
      </div>
    </li>
    <li>
      <a href="">
        <div class="icon weixin">
          <Icon type="weixin" />
        </div>
        <span>15198028692</span>
      </a>
      <div class="pop">
        <img src="https://test-statics-quanmin.cd.xiaoxigroup.net/qmip-basic-file/test/2023-02-06/1675678379961.png" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon
  }
}
</script>

<style lang="less" scoped>
@import url('~@/styles/var.less');

.contact-container {
  list-style: none;
  padding: 20px;
  margin: 0;
  color: @gray;
  @itemHeight: 30px;

  li {
    height: @itemHeight;
    line-height: @itemHeight;
    margin: 14px 0;
    position: relative;

    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
  }
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .icon {
    font-size: 26px;
    width: 36px;
    
    &.weixin {
      font-size: 32px;
      text-indent: -3px;
    }
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: @itemHeight;
    // border: 1px solid @words;
    padding: 10px 15px;
    background: white;
    border-radius: 5px;
    transform: scaleY(0);
    transform-origin: center bottom;
    transition: 0.3s;
    
    img {
      width: 150px;
      height: 150px;
    };
    &::after {
      content: "";
      position: absolute;
      left: 50%;
      transform: translateX(-50%) rotate(45deg);
      width: 8px;
      height: 8px;
      background: #fff;
      bottom: -4px;
      // bottom: 5px;
    }
  }
}
</style>