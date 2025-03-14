<?php

declare(strict_types=1);

namespace SimpleSAML\XMLSecurity\XML\xenc11;

use SimpleSAML\XML\StringElementTrait;

/**
 * Class representing a xenc11:MasterKeyName element.
 *
 * @package simplesamlphp/xml-security
 */
final class MasterKeyName extends AbstractXenc11Element
{
    use StringElementTrait;


    /**
     * @param string $content
     */
    public function __construct(string $content)
    {
        $this->setContent($content);
    }
}
