<template>
  <div>
    <TyContent title="demo1"/>
    <TyContent title="demo2" :clearBorderTop="true"/>
    <TyContent title="demo3" :clearBorderTop="false"/>
    <TyContent title="demo4" content="<b>不渲染HTML标记</b>"/>
    <TyContent title="demo5" :isShowHtml="true" content="<b>渲染HTML标记</b>"/>
  </div>
</template>
