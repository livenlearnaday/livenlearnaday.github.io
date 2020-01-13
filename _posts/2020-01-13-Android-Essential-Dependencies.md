---
published: true
layout: post
description: A collection of android essential dependencies.
keywords: 'android,dependencies'
categories:
  - EN
  - post
---
  
## App Gradle Dependencies

Contains a list of essential dependencies for android studio for reference and usage.

Please note that the version stated on the site may be outdated. Nonetheless, they can be updated via update function in the dependecies section of the project structure in android studio.

The copy buttons are not working as yet.


### For network requests

{%- capture code -%}
implementation 'com.android.volley:volley:1.1.1'
{%- endcapture -%}
{% include code_snippet.md code=code language='' %} 


{%- capture code -%}
implementation 'com.squareup.retrofit2:retrofit:2.7.1'
{%- endcapture -%}
{% include code_snippet.md code=code language='' %} 


### For image handling

{%- capture code -%}
implementation 'com.squareup.picasso:picasso:2.71828'
{%- endcapture -%}
{% include code_snippet.md code=code language='' %} 


{%- capture code -%}
implementation 'com.github.bumptech.glide:glide:4.11.0'
{%- endcapture -%}
{% include code_snippet.md code=code language='' %} 
