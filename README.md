# node-red-social-aggregator
Multiple social platform aggregator using the rivus lib on node-red. The input object into the node-red node can be used to retreve user feeds from a multiple of sources with different keys (if needed). This makes the aggregation and normalisation of data easier as it retrieves and attempts to handle each of the below sources in a number of different ways. 

### Node Input 

To load send an array object to the node

```
[
    {
        "name": "rss",
        "feed_url": "https://sitepoint.com/feed/"
    },
    {
        "name": "twitter",
        "user": "@developersteve",
        "consumer_key": "eWxCQh9fLgzNRGA31pyaaaaaaa",
        "consumer_secret": "mG75BmuM9EovWKRff3oLHLBs4r1pSB02IsssGqgtXdHhtsk8",
        "access_token_key": "1234567878-bKOvuci3Dlcm2sssf2FeiQmi6y9F0hBZMk36EhSXI",
        "access_token_secret": "c6Kh5BRSh5Yeq9sssadsd5i4zUozAtqLWEeczTOBJkMdRfpGz"
    }
]
```

#### Input types
Example of input types and how to load them, these can be multiples and remember to watch the rate-limits when dealing with some of the API's (im looking at you twitter).

```
[
        {
            "name": "rss",
            "feed_url": "https://developer.ibm.com/feed/"
        },
        {
            "name": "instagram",
            "user": "@developersteve",
            "access_token": ""
        },
        {
            "name": "medium",
            "user": "@username"
        },
        {
            "name": "medium",
            "publication": "blog_title"
        },
        {
            "name": "medium",
            "publication_with_custom_domain": "http://www.developer.ibm.com"
        },
        {
            "name": "twitter",
            "user": "@developersteve",
            "consumer_key": "",
            "consumer_secret": "",
            "access_token_key": "",
            "access_token_secret": ""
        },
        {
            "name": "facebook",
            "app_id": "",
            "app_secret": "",
            "user_id": ""
        }
    ]
```

### Node Output

Output response will be via ```msg.payload``` which should return something like the following 

```
{
  title: '',
  content: '',
  created_time: {},
  images: {
    thumbnail: {url: ''},
    content: {url: ''}
  },
  link: "",
  extra: {},
  source: {
    name: '', 
    feed: '' 
  }
}
```