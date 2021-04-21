import { Component, Host, h } from '@stencil/core';
import { JSXBase } from '@stencil/core/internal';

@Component({
  tag: 'app-lesson',
  styleUrl: 'app-lesson.css',
  shadow: true,
})
export class AppLesson {
  render() {
    const props = {
      name: 'i1',
      value: 'abc',
      // };
    } as JSXBase.InputHTMLAttributes<HTMLInputElement>;

    const { value, name, ...props2 } = props;

    return (
      <Host>
        <slot></slot>
        <input {...props2} />
      </Host>
    );
  }
}
