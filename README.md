lda-webview
===========

View LDA data from a JSON data file. 

### Usage ###

Clone the repo and replace the results.json with your own. 
Here's a quick rundown of how the data is (currently) expected to be laid out:
 * top-level object
   * features: an array of words/features
   * topics: an array of topics. Each topic is an object with these properties
     * total: the total count of words belonging to this array (ie summing the words array)
     * words: each spot in the array is the number of times the corresponding word in the features array appears in this topic
   * docs: and array of documents and each document is an object with these properties
      * date: a string - the last 4 digits is a year
      * title: a string - the name of the document
      * artist: a string - the name of the author
      * link: a link to the document - right now I prepend http://speeches.byu.edu/ to the fragment. I'll fix this soon
      * counts: an array of topic counts - it corresponds to the topics array.

Here's a short condensed example of a json file

``` json
{
  "docs": [
    {
      "artist": "Abegglen, Jo Ann",
      "title": "The Power of One: Selfless Service",
      "date": "Jul 11, 2006",
      "link": "index.php?act=viewitem&id=1587",
      "counts": [
        103,
        5
      ]
    },
    {
      "artist": "Abrea, Angel",
      "title": "A Divine Nature and Destiny",
      "date": "Jun 15, 1999",
      "link": "index.php?act=viewitem&id=20",
      "counts": [
        12,
        542
      ]
    },
    {
      "artist": "Abrea, Angel",
      "title": "You and Your Free Agency",
      "date": "Jun 26, 1984",
      "link": "index.php?act=viewitem&id=23",
      "counts": [
        167,
        15
      ]
    }
  ],
  "topics": [
    {
      "words": [
        24,
        0,
        ...
        0
      ],
      "total": 282
    },
    {
      "words": [
        0,
        9,
        ...
        10
      ],
      "total": 562
    }
  ],
  "features": [
    "agency",
    "blessings",
    ...
    "world"
  ]
}```
