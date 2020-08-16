import { mount, createLocalVue } from '@vue/test-utils'
import Contributors from '@/components/contributors.vue'
import Vue from 'vue'
import ElementUI from 'element-ui'
import {expect} from 'chai'
//import getContributorsData from '@/api'

const localVue = createLocalVue()
localVue.use(ElementUI)
const defaultData = Contributors.data()

describe('Contributors', () => {
  const wrapper = mount(Contributors, {localVue})
  it('initial data', () => {
    expect(defaultData.total_contributors).to.equal(500);
    expect(defaultData.current_page).to.equal(1)
    expect(defaultData.page_size).to.equal(20)
    expect(defaultData.card_class).to.equal('card-contributors')
    expect(defaultData.fade_class).to.equal('fade-in')
  })

 // it('test fetcher',  async () =>{
 //   //const res =  await getContributorsData(1,1);
 //   //expect(res.status).to.equal(200);
 //   //expect(res.data).to.be.an("array");
 // })


})
