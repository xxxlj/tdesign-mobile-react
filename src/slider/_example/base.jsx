import React, { useState } from 'react';
import { Slider } from 'tdesign-mobile-react';
import TDemoBlock from '../../../docs/mobile/components/DemoBlock';
import TDemoHeader from '../../../docs/mobile/components/DemoHeader';
import './style/index.less'

export default function Base() {

  const [value, setValue] = useState(65)
  const onChange = (value) => {
    console.log(value);
    setValue(value)
  }

  return (
    <div className='tdesign-mobile-demo'>
      <TDemoHeader title="Slider 滑动选择器" summary="滑动滑块来选择一个数值，在具体场景中也可以增加来刻度和展示数值来方便用户使用"/>
      <TDemoBlock title="01 类型" summary="基础滑动选择器">
        <div className='tdesign-demo-block-wrap'>
          <Slider value={value} onChange={onChange}/>
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="带数值滑动选择器">
        <div className='tdesign-demo-block-wrap'>
          <Slider showValue value={60}/>
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="起始非零滑动选择器">
        <div className='tdesign-demo-block-wrap'>
          <Slider showValue min={30} value={30}/>
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="带刻度滑动选择器">
        <div className='tdesign-demo-block-wrap tdesign-demo-block-wrap__block'>
          <Slider marks={{ 0: '小', 50: '中', 100: '大' }} value={50}/>
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="区间滑动选择器">
        <div className='tdesign-demo-block-wrap tdesign-demo-block-wrap__block'>
          <Slider value={[30, 70]} range/>
        </div>
      </TDemoBlock>
      <TDemoBlock title="02 状态" summary="滑动选择器禁用状态">
        <div className='tdesign-demo-block-wrap'>
          <Slider showValue value={60} disabled/>
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="带刻度滑动选择器">
        <div className='tdesign-demo-block-wrap tdesign-demo-block-wrap__block'>
          <Slider marks={{ 0: '小', 50: '中', 100: '大' }} value={50} disabled/>
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="区间滑动选择器">
        <div className='tdesign-demo-block-wrap tdesign-demo-block-wrap__block'>
          <Slider value={[30, 70]} range disabled/>
        </div>
      </TDemoBlock>
      <TDemoBlock title="03 规格" summary="无标题滑动选择器">
        <div className='tdesign-demo-block-wrap'>
          <Slider value={65} />
        </div>
      </TDemoBlock>
      <TDemoBlock title="" summary="有标题滑动选择器">
        <div className='tdesign-demo-block-wrap'>
          <Slider value={65} title="选择器标题"/>
        </div>
      </TDemoBlock>
    </div>
  );
}
