package com.samrintech.quotedelight;

import com.facebook.react.ReactActivity;
import org.devio.rn.splashscreen.SplashScreen; 
import android.os.Bundle;
import android.view.View;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "QuoteDelight";
  }
  @Override
    protected void onCreate(Bundle savedInstanceState) {
        SplashScreen.show(this, R.style.SplashScreenTheme);
        super.onCreate(savedInstanceState);
        View decorView = getWindow().getDecorView();
        decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
        | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN);
    }
}
