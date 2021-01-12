import { h, Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-side-drawer',
  styleUrl: './side-drawer.css',
  shadow: true,
})
export class SideDrawer {
  @Prop({ reflect: true }) name: string;
  @Prop({ reflect: true, mutable: true }) open: boolean;

  onCloseDrawer() {
    this.open = false;
  }

  render() {
    return (
      <aside>
        <header>
          <h1>{this.name}</h1>
          <button onClick={this.onCloseDrawer.bind(this)}>X</button>
        </header>
        <main>
          <slot />
        </main>
      </aside>
    );
  }
}
