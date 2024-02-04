import { Component, Prop, h } from '@stencil/core';
import { log } from 'console';
@Component({
  tag: 'my-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true

})
export class SideDrawer {
  @Prop({ reflect: true }) title: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;


  onCloseDrawer() {
    this.open = false;
  }

  onContentChange(content: string) {
  console.log(content);

  }

  render() {
    let mainContent = <slot />;
    mainContent = (
      <div id="contact-information">
      <h2>Contact Information</h2>
      <p>You can reach us via phone or email.</p>
      <ul>
        <li>Phone: 12345</li>
        <li>
          Email:
           <a href="mailto:jandro@jandrohen.es">jandro@jandrohen.es</a>
        </li>
      </ul>
      </div>
    );
    return (
    <aside>
    <header>
      <h1>{this.title}</h1>
      <button onClick={this.onCloseDrawer.bind(this)}>X</button>
    </header>
    <section id="tabs">
      <button class="active" onClick={this.onContentChange.bind(this, 'nav')}>Navigation</button>
      <button onClick={this.onContentChange.bind(this, 'contact')}>Contact</button>
    </section>
    <main>
      {mainContent}
    </main>
  </aside>
    );
  }

}
