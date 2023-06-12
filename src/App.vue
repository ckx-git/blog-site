<template>
  <div class="app">
    <!-- <PagerTest />
    <AvatarTest />
    <IconTest />
    <ImageLoaderTest />
    <EmptyTest />
    <MenuTest />
    <ContactTest /> -->
    <SiteAsideTest />
  </div>
</template>

<script>
import PagerTest from '@/components/Pager/test'
import AvatarTest from '@/components/Avatar/test'
import IconTest from '@/components/Icon/test'
import ImageLoaderTest from '@/components/ImageLoader/test'
import EmptyTest  from '@/components/Empty/test'
import MenuTest  from '@/components/SiteAside/Menu/MenuTest'
import ContactTest  from '@/components/SiteAside/Contact/test'
import SiteAsideTest  from '@/components/SiteAside/test'

export default {
  name: 'App',
  components: {
    PagerTest,
    AvatarTest,
    IconTest,
    ImageLoaderTest,
    EmptyTest,
    MenuTest,
    ContactTest,
    SiteAsideTest
  }
}
</script>

<style>

</style>