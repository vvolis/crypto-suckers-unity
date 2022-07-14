using Photon.Pun;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MovingBush : MonoBehaviourPun
{

    public float rightLimit = 2.5f;
    public float leftLimit = 1.0f;
    public float speed = 2.0f;
    private int direction = 1;

    // Start is called before the first frame update
    public void Start()
    {
        
    }

    // Update is called once per frame
    public void Update()
    {
        if (photonView.IsMine == false && PhotonNetwork.IsConnected == true)
        {
            return;
        }

        if (transform.position.x > rightLimit)
        {
            direction = -1;
        }
        else if (transform.position.x < leftLimit)
        {
            direction = 1;
        }
        var movement = Vector3.right * direction * speed * Time.deltaTime;
        transform.Translate(movement);
    }
}
